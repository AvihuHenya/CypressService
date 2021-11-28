import json
import os
import time 

class Report:
    def __init__(self, name, date, reportUrl):
        self.name = name
        self.date = date
        self.reportUrl = reportUrl

class ReportsArray:
    def __init__(self,reports):
        self.reports = reports
    def toJson(self):
        return json.dumps(self, default=lambda o: o.__dict__)

def reportConstructor(REPORTS_DIRECTORY):
    reportsArray = []
    for filename in os.listdir(REPORTS_DIRECTORY):
            if filename.endswith(".html"): 
                reportsArray.append(Report(filename,time.ctime((getcTime(REPORTS_DIRECTORY,filename))),getFullPath(REPORTS_DIRECTORY,filename)))
    reportsArrayJson = ReportsArray(reportsArray).toJson()
    return reportsArrayJson

def getcTime(REPORTS_DIRECTORY,filename):
    return os.path.getctime(os.path.join(REPORTS_DIRECTORY, filename))
    
def getFullPath(REPORTS_DIRECTORY, filename):
    return os.path.join(REPORTS_DIRECTORY, filename)

def pp_json(json_thing, sort=True, indents=4):
    if type(json_thing) is str:
        print(json.dumps(json.loads(json_thing), sort_keys=sort, indent=indents))
    else:
        print(json.dumps(json_thing, sort_keys=sort, indent=indents))
    return None
