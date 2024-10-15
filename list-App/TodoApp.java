import java.util.ArrayList;
import java.util.Scanner;

public class TodoApp {
    private static ArrayList<String> tasks = new ArrayList<>();

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String command;

        while (true) {
            System.out.println("Commands: add <task>, list, delete <index>, exit");
            command = scanner.nextLine();

            if (command.startsWith("add ")) {
                String task = command.substring(4);
                tasks.add(task);
                System.out.println("Added task: " + task);
            } else if (command.equals("list")) {
                listTasks();
            } else if (command.startsWith("delete ")) {
                int index = Integer.parseInt(command.split(" ")[1]);
                if (index >= 0 && index < tasks.size()) {
                    System.out.println("Removed task: " + tasks.get(index));
                    tasks.remove(index);
                } else {
                    System.out.println("Task not found.");
                }
            } else if (command.equals("exit")) {
                break;
            } else {
                System.out.println("Invalid command.");
            }
        }
        scanner.close();
    }

    private static void listTasks() {
        System.out.println("To-Do List:");
        for (int i = 0; i < tasks.size(); i++) {
            System.out.println(i + ": " + tasks.get(i));
        }
    }
}
