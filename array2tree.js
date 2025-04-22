var fs = require("fs");
var path = require("path");
var jsonFile = require('./health_check.json');

// let workPackages = JSON.parse(jsonFile);
// console.log(jsonFile)
function refactor(workPackages) {
    let hasIssue = false;
    workPackages.map((workPackage, i) => {
        if (workPackage.type === 'Health Check') {
            if (workPackage.status === 'Experiencing issues' || workPackage.status === 'Critical outage') {
                hasIssue = true
            }
        } else {
            if (workPackage.children) {
                let testIssue = refactor(workPackage.children)
                workPackages[i].hasIssue = testIssue.hasIssue
            }
        }
        workPackages[i].hasIssue = hasIssue
    })
    
    return { hasIssue, workPackages}
}

let {workPackages} = refactor(jsonFile);


fs.writeFile(path.join(__dirname, './health_check_cp.json'), JSON.stringify(workPackages), async (err) => {
    if (err) {
        console.log(err)
        return res.send({
            status: false,
            msg: "Error: Something went wrong.",
            data: {}
        })
    };
})
// console.log(jsonFile);

// function refactorProjects(parentProject, workPackages) { 
//     workPackages.reduce((parentProject, value, index) => {
//         if (value.type === 'Health Check') {
//             if (value.status === 'Working' || value.status === 'New') {
//                 parentProject.hasIssue = false
//             } else if (value.status === 'Experiencing issues' || value.status === 'Critical outage') {
//                 parentProject.hasIssue = true
//             }
//             return parentProject
//         } else {
//             if (value.children && value.children.length) {
//                 return refactorProjects(value, value.children)
//             } else {
//                 return parentProject
//             }
//         }
//     }, parentProject)
//     return parentProject
// }