# Comtrade Data Download Tool
JSON based data download tool aims to automate the download procedure at [UN-comtrade-data](https://comtrade.un.org/data). Using JSON file to configure what to download and which folder to store.
## Install
Because of the use of Promise, this tool might need Nodejs 8 or later
```
npm install
```
## Usage
We use ```schema.json``` to configure the file to download and store management. If your ```schema.json``` same as below, then you will get a file structure like the screenshot.
```
{
  "reporters": "all",
  "year": 2015, 
  "folders": [
    {
      "folder": "08",
      "cc": ["074", "111", "112"]
    }
  ]
}
```
![file structure](/doc/folderTree.png)  
Run ``` npm start ``` to start download. 