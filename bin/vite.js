#!/usr/bin/env node

var inquirer = require('inquirer')
const {
    join
} = require('path')
const copyDir = require('../script/copy')

function run(args) {
    if (args[0] === 'create' && args[1]) {
        inquirer.prompt([{
                type: 'input',
                name: 'projectName',
                message: '项目名',
                default: args[1]
            },
            {
                type: 'list',
                message: '采用什么app模板',
                name: 'appType',
                choices: [{
                        name: 'H5',
                        value: 'H5',
                        short: 'H5',
                    },
                    {
                        name: 'web-ts',
                        value: 'web-ts',
                        short: 'web-ts'
                    }
                ]
            }
        ]).then((ans) => {
            const currentPath = process.cwd()
            switch (ans.appType) {
                case "H5":
                    copyDir(join(__dirname, '../projects/h5-jsx-pinia'), join(currentPath, `${ans.projectName}`), () => {console.log('如果是bug，请及时反馈给开发者哦😯')})
                    break;
                case "web-ts":
                    copyDir(join(__dirname, '../projects/web-ts'), join(currentPath, `${ans.projectName}`),() => {console.log('如果是bug，请及时反馈给开发者哦😯')})
                    break;
            }
            console.log("✨  创建项目成功!\n")
            console.log(`👉🏼  cd ${ans.projectName} !\n`)
            console.log(`🎮  npm install \n`)
        })
    }
}

// 获取进程的参数
run(process.argv.slice(2))