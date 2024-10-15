tasks = []

while True:
    command = input("Commands: add <task>, list, delete <index>, exit\n")

    if command.startswith("add "):
        task = command[4:]
        tasks.append(task)
        print(f"Added task: {task}")
    elif command == "list":
        print("To-Do List:")
        for i, task in enumerate(tasks):
            print(f"{i}: {task}")
    elif command.startswith("delete "):
        index = int(command.split()[1])
        if 0 <= index < len(tasks):
            print(f"Removed task: {tasks.pop(index)}")
        else:
            print("Task not found.")
    elif command == "exit":
        break
    else:
        print("Invalid command.")
