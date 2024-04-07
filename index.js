import inquirer from "inquirer";
let todo_list = [];
let while_condition = true;
while (while_condition === true) {
    let option = await inquirer.prompt([{
            name: "operator",
            type: "list",
            message: "select your option",
            choices: ["Add", "remove", "View", "Delete"]
        }]);
    if (option.operator === "Add") {
        let answer = await inquirer.prompt([{
                name: "usr.ans",
                type: "input",
                message: "write some thing to your todo list?"
            }]);
        if (answer.option !== '') {
            todo_list.push(answer.usr.ans);
            console.log(todo_list);
        }
        else {
            console.log("please write some thing in your todo list");
        }
    }
    else if (option.operator === "remove") {
        let removechoices = await inquirer.prompt([{
                name: "remove_item",
                type: "list",
                message: "please select your item to remove?",
                choices: todo_list
            }]);
        let index_to_remove = todo_list.indexOf(removechoices.remove_item);
        if (index_to_remove >= 0) {
            todo_list.splice(index_to_remove, 1);
            console.log('you removed:', removechoices.remove_item);
            console.log(todo_list);
        }
    }
    else if (option.operator === "View") {
        console.log(todo_list);
    }
    let usr_ans = await inquirer.prompt([{
            type: "confirm",
            name: "selection",
            message: "Do you want to continue?",
            default: true
        }]);
    if (usr_ans.selection === false) {
        while_condition = false;
    }
}
console.log(`Thank you for using to do list`);
