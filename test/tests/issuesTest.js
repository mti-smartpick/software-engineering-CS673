/// Issues Test File - Tests issues table in the database and associated files ///
/// CONSTANTS /// - These should really be capitcal camel case
const assert = require("chai").assert;
const io = require("socket.io-client");
const server = require("../../server.js")
const socketUrl = "http://localhost:8000"
const db = require("../../backend/config/database")
const moment = require("moment")

const options = {
    transports: ['websocket'],
    'force new connection': true
};

describe("Testing the IssueController with socket conenction", () => {
    // Module Test 1
    it("Should create a new issue and retrieve new Issue from ID", (done) => {
        // Setup client connection to backend
        let client = io.connect(socketUrl, options);
        let issueID = 1;
        const issueName = "I GOT 99 PROBLEMS BUT AN ISSUE IN SWELLODESK AINT ONE";
        const issueSummary = "Jay-Z";
        const projectID = 1;
        const issueStatusID = 1;
        const userID = 1;
        const responsibleUserID = 1;
        const priorityID = 1;

        // Wait for connection to backend
        client.on("connect", async () => {
            // Send command to server
            // In order: issueName, issueSummary, projectID, issueStatusID, userID, responsibleUserID, priorityID
            client.emit("CREATE_NEW_ISSUE", issueName, issueSummary, projectID, issueStatusID, userID, responsibleUserID, priorityID);

            // Await response from server from CREATE_NEW_ISSUE Command
            client.on("CREATED_NEW_ISSUE", (data) => {
                assert.notEqual(data, 0, "Returned RowID was 0!");
                issueID = data;

                // Emit here so it doesn't emit before we get the data back
                client.emit("GET_ISSUE_WITH_ID", issueID);
            });

            // Await response from server from GET_ISSUE_WITH_ID
            client.on("GOT_ISSUE_WITH_ID", (data) => {
                assert.equal(data.IssueID, issueID, "IssueIDs are not equal");
                assert.equal(data.IssueName, issueName, "IssueNames are not equal");
                assert.equal(data.Summary, issueSummary, "IssueSummaries are not equal");
                assert.equal(data.ProjectID, projectID, "ProjectIDs are not equal");
                assert.equal(data.IssueStatusID, issueStatusID, "IssueStatusIDs are not equal");
                assert.equal(data.AssigneeID, userID, "UserIDs are not equal");
                assert.equal(data.AssignedToID, responsibleUserID, "ResponsibleUserIDs are not equal");
                assert.equal(data.PriorityID, priorityID, "PriorityIDs are not equal");
                done();
            });
        });
    });

    // Module Test 2
    it("Should create a new issue and then update the issue's status", (done) => {
        // Setup client connection to backend
        let client = io.connect(socketUrl, options);
        let issueID = 1; // Temp value ofc, it get's updated later
        const issueName = "Update Issue Status Test";
        const issueSummary = "We gonna go from 1 to 2 yeet yeet";
        const projectID = 1;
        const issueStatusID = 1;
        const newIssueStatusID = 2;
        const userID = 1;
        const responsibleUserID = 1;
        const priorityID = 1;

        // Wait for connection to backend
        client.on("connect", async () => {
            // Send command to server
            // In order: issueName, issueSummary, projectID, issueStatusID, userID, responsibleUserID, priorityID
            client.emit("CREATE_NEW_ISSUE", issueName, issueSummary, projectID, issueStatusID, userID, responsibleUserID, priorityID);

            // Await response from server from CREATE_NEW_ISSUE Command
            client.on("CREATED_NEW_ISSUE", (data) => {
                assert.notEqual(data, 0, "Returned RowID was 0!");
                issueID = data;

                // Emit here so it doesn't emit before we get the data back
                client.emit("UPDATE_ISSUE_STATUS", issueID, newIssueStatusID);
            });

            // Once we updated the IssueStatusID get the row back and check
            client.on("UPDATED_ISSUE_STATUS", (data) => {
                assert.equal(data, 1, "We returned more than 1 changed row! SOMIT SCHLECHT!");

                // If we have changed a row, lets get the row back, here we know that we have the issueID from before since this occurs after the insert
                client.emit("GET_ISSUE_WITH_ID", issueID);
            });

            // Await response from server from GET_ISSUE_WITH_ID
            client.on("GOT_ISSUE_WITH_ID", (data) => {
                assert.equal(data.IssueID, issueID, "IssueIDs are not equal");
                assert.equal(data.IssueName, issueName, "IssueNames are not equal");
                assert.equal(data.Summary, issueSummary, "IssueSummaries are not equal");
                assert.equal(data.ProjectID, projectID, "ProjectIDs are not equal");
                assert.equal(data.IssueStatusID, newIssueStatusID, "IssueStatusIDs are not equal"); // Check the new ID!
                assert.equal(data.AssigneeID, userID, "UserIDs are not equal");
                assert.equal(data.AssignedToID, responsibleUserID, "ResponsibleUserIDs are not equal");
                assert.equal(data.PriorityID, priorityID, "PriorityIDs are not equal");
                done();
            });
        });
    });

    // Module Test 3
    it("Should get all the issues in the database", (done) => {
        // Setup client connection to backend
        let client = io.connect(socketUrl, options);
        let issueID = 1; // Temp value ofc, it get's updated later
        const issueName = "Get Issues Test";
        const issueSummary = "We gonna have at least one in hereeeeeeee boiiiiiii";
        const projectID = 1;
        const issueStatusID = 1;
        const newIssueStatusID = 1;
        const userID = 1;
        const responsibleUserID = 1;
        const priorityID = 1;

        // Wait for connection to backend
        client.on("connect", async () => {
            // Send creation command to server
            // In order: issueName, issueSummary, projectID, issueStatusID, userID, responsibleUserID, priorityID
            client.emit("CREATE_NEW_ISSUE", issueName, issueSummary, projectID, issueStatusID, userID, responsibleUserID, priorityID);

            // Await response from server from CREATE_NEW_ISSUE Command so we at least have on in the database
            client.on("CREATED_NEW_ISSUE", (data) => {
                assert.notEqual(data, 0, "Returned RowID was 0!");
                issueID = data;

                // Emit here so it doesn't emit before we get the data back
                client.emit("GET_ISSUES");
            });

            // Once we get the issues back from the server
            client.on("GOT_ISSUES", (data) => {
                assert.isAtLeast(data.length, 1, "Issues returned is less than 1! There should be at least 1!")
                done();
            });
        });
    });
});
