import csv
import os


class ExpenseTracker:

    def __init__(self):

        self.file = "expenses.csv"

        self.expenses = []

        self.load_expenses()

    def load_expenses(self):

        if os.path.exists(self.file):

            with open(
                self.file,
                "r",
                newline=""
            ) as csvfile:

                reader = csv.DictReader(csvfile)

                self.expenses = list(reader)

    def save_expenses(self):

        with open(
            self.file,
            "w",
            newline=""
        ) as csvfile:

            fieldnames = [
                "category",
                "amount"
            ]

            writer = csv.DictWriter(
                csvfile,
                fieldnames=fieldnames
            )

            writer.writeheader()

            writer.writerows(self.expenses)

    def add_expense(self):

        category = input("Category: ")

        amount = input("Amount: ₹")

        self.expenses.append({

            "category": category,

            "amount": amount

        })

        self.save_expenses()

        print("\nExpense Added Successfully!\n")

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

            total += float(expense["amount"])

        print("--------------------")

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

            input("Enter expense number: ")

        )

        if 1 <= number <= len(self.expenses):

            removed = self.expenses.pop(number - 1)

            self.save_expenses()

            print(

                f"{removed['category']} deleted."

            )

        else:

            print("Invalid number.")


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