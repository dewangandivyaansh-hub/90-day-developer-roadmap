import json


class ExpenseTracker:

    def __init__(self):

        try:

            with open("expenses.json", "r") as file:

                self.expenses = json.load(file)

        except:

            self.expenses = []

    def save_expenses(self):

        with open("expenses.json", "w") as file:

            json.dump(
                self.expenses,
                file,
                indent=4
            )

    def add_expense(self):

        category = input("Category: ")

        amount = float(input("Amount: ₹"))

        self.expenses.append({

            "category": category,

            "amount": amount

        })

        self.save_expenses()

        print("\nExpense added successfully!\n")

    def view_expenses(self):

        if not self.expenses:

            print("\nNo expenses found.\n")

            return

        total = 0

        print("\nExpense List\n")

        for index, expense in enumerate(self.expenses):

            print(

                f"{index + 1}. {expense['category']} : ₹{expense['amount']}"

            )

            total += expense["amount"]

        print("----------------")

        print(f"Total Spending: ₹{total}")

    def search_expense(self):

        category = input("Enter category: ")

        found = False

        for expense in self.expenses:

            if expense["category"].lower() == category.lower():

                print(

                    f"{expense['category']} : ₹{expense['amount']}"

                )

                found = True

        if not found:

            print("No expense found.")

    def delete_expense(self):

        self.view_expenses()

        if not self.expenses:

            return

        number = int(

            input("\nEnter expense number to delete: ")

        )

        if 1 <= number <= len(self.expenses):

            removed = self.expenses.pop(number - 1)

            self.save_expenses()

            print(

                f"{removed['category']} deleted successfully."

            )

        else:

            print("Invalid expense number.")


tracker = ExpenseTracker()

while True:

    print("\n===== Expense Tracker =====")

    print("1. Add Expense")

    print("2. View Expenses")

    print("3. Search Expense")

    print("4. Delete Expense")

    print("5. Exit")

    choice = input("Choose: ")

    if choice == "1":

        tracker.add_expense()

    elif choice == "2":

        tracker.view_expenses()

    elif choice == "3":

        tracker.search_expense()

    elif choice == "4":

        tracker.delete_expense()

    elif choice == "5":

        print("Goodbye!")

        break

    else:

        print("Invalid choice!")