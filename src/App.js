import React, { Component } from "react";
import { ReactGhLikeDiff } from "react-gh-like-diff";
// import fetch from "unfetch";
// import { TITLE, PAST, CURRENT } from "./constants";
import "react-gh-like-diff/dist/css/diff2html.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactGhLikeDiff
          options={{
            matching: "lines",
            drawFileList: false,
            matchWordsThreshold: 1
          }}
          past={`{
            "_id": { "$oid": "5f68c3e504c7a7367a4f7ec4" },
            "HostCode": "9898A1",
            "Name": "PE",
            "Description": "Preeclampsia",
            "Panel": false,
            "Contents": [
              { "id": { "$oid": "5f1b0375d54fb3df2a281642" } },
              { "id": { "$oid": "5f1b0c75d54fb3df2a281645" } },
              { "id": { "$oid": "5f1b1ef0f3c361df1f532775" } },
              { "id": { "$oid": "5f1b301ed54fb3df2a281649" } },
              { "id": { "$oid": "5f1b344fd54fb3df2a28164d" } },
              { "id": { "$oid": "5f1b3900f3c361df1f532778" } },
              { "id": { "$oid": "5f1b3b0bd54fb3df2a281650" } },
              { "id": { "$oid": "5f1b3cddd54fb3df2a281653" } },
              { "id": { "$oid": "5f1b3f68f3c361df1f53277c" } },
              { "id": { "$oid": "5f1b40b8d54fb3df2a281656" } },
              { "id": { "$oid": "5f1b4270f3c361df1f532780" } },
              { "id": { "$oid": "5f1b4d19d54fb3df2a28165b" } },
              { "id": { "$oid": "5f22d98dd54fb3df2a281668" } },
              { "id": { "$oid": "5f22da8ef3c361df1f532791" } },
              { "id": { "$oid": "5f22df98f3c361df1f532795" } },
              { "id": { "$oid": "5f22e1b5f3c361df1f532798" } },
              { "id": { "$oid": "5f22e268d54fb3df2a28166b" } }
            ],
            "RuleSet": [
              {
                "id": { "$oid": "5f038908bf16bba714599501" },
                "Outcomes": [
                  {
                    "Key": "Preeclampsia Failed Analysis",
                    "Template": "preeclampsia-result-template-v1",
                    "ResultFlag": "FailedAnalysis",
                    "Contents": [{ "id": { "$oid": "5f19fcffd54fb3df2a281637" } }],
                    "TestsToReflex": []
                  },
                  {
                    "Key": "Preeclampsia Negative",
                    "Template": "preeclampsia-result-template-v1",
                    "ResultFlag": "Negative",
                    "Contents": [
                      { "id": { "$oid": "5f19f8eff3c361df1f53276b" } },
                      { "id": { "$oid": "5f1af29dd54fb3df2a28163d" } }
                    ],
                    "TestsToReflex": []
                  },
                  {
                    "Key": "Preeclampsia Non-Negative",
                    "Template": "preeclampsia-result-template-v1",
                    "ResultFlag": "Non-Negative",
                    "Contents": [
                      { "id": { "$oid": "5f19fa4fd54fb3df2a281634" } },
                      { "id": { "$oid": "5f1ae757d54fb3df2a28163a" } }
                    ],
                    "TestsToReflex": []
                  },
                  {
                    "Key": "Preeclampsia Else",
                    "Template": "preeclampsia-result-template-v1",
                    "ResultFlag": "Exception",
                    "Contents": [{ "id": { "$oid": "5f19fb5ff3c361df1f53276e" } }],
                    "TestsToReflex": []
                  }
                ]
              }
            ]
          }
          `}
          current={`{
            "_id": { "$oid": "5f32a074f5ab92ac45d13a89" },
            "HostCode": "9898A1",
            "Name": "PE",
            "Description": "Preeclampsia",
            "Panel": false,
            "Contents": [
              { "id": { "$oid": "5f1b0375d54fb3df2a281640" } },
              { "id": { "$oid": "5f1b0c75d54fb3df2a281645" } },
              { "id": { "$oid": "5f1b1ef0f3c361df1f532775" } },
              { "id": { "$oid": "5f1b301ed54fb3df2a281649" } },
              { "id": { "$oid": "5f1b344fd54fb3df2a28164d" } },
              { "id": { "$oid": "5f1b3900f3c361df1f532778" } },
              { "id": { "$oid": "5f1b3b0bd54fb3df2a281650" } },
              { "id": { "$oid": "5f1b3cddd54fb3df2a281653" } },
              { "id": { "$oid": "5f1b3f68f3c361df1f53277c" } },
              { "id": { "$oid": "5f1b40b8d54fb3df2a281656" } },
              { "id": { "$oid": "5f1b4270f3c361df1f532780" } },
              { "id": { "$oid": "5f1b4d19d54fb3df2a28165b" } },
              { "id": { "$oid": "5f22d98dd54fb3df2a281668" } },
              { "id": { "$oid": "5f22da8ef3c361df1f532791" } },
              { "id": { "$oid": "5f22df98f3c361df1f532795" } }
            ],
            "RuleSet": [
              {
                "id": { "$oid": "5f038908bf16bba714599501" },
                "Outcomes": [
                  {
                    "Key": "Preeclampsia Failed Analysis",
                    "Template": "preeclampsia-result-template-v1",
                    "ResultFlag": "FailedAnalysis",
                    "Contents": [{ "id": { "$oid": "5f19fcffd54fb3df2a281637" } }],
                    "TestsToReflex": []
                  },
                  {
                    "Key": "Preeclampsia Negative",
                    "Template": "preeclampsia-result-template-v1",
                    "ResultFlag": "Negative",
                    "Contents": [
                      { "id": { "$oid": "5f19f8eff3c361df1f53276b" } },
                      { "id": { "$oid": "5f1af29dd54fb3df2a28163d" } }
                    ],
                    "TestsToReflex": []
                  },
                  {
                    "Key": "Preeclampsia Non-Negative",
                    "Template": "preeclampsia-result-template-v1",
                    "ResultFlag": "Non-Negative",
                    "Contents": [
                      { "id": { "$oid": "5f19fa4fd54fb3df2a281634" } },
                      { "id": { "$oid": "5f1ae757d54fb3df2a28163a" } }
                    ],
                    "TestsToReflex": []
                  },
                  {
                    "Key": "Preeclampsia Else",
                    "Template": "preeclampsia-result-template-v1",
                    "ResultFlag": "Exception",
                    "Contents": [{ "id": { "$oid": "5f19fb5ff3c361df1f53276e" } }],
                    "TestsToReflex": []
                  }
                ]
              }
            ]
          }
          
          `}
        />
      </div>
    );
  }
}

export default App;
