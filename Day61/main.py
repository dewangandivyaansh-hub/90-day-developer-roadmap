expenses = []


def add_expense():

    category = input("Category: ")

    amount = float(input("Amount: ₹"))

    expense = {
        "category": category,
        "amount": amount
    }

    expenses.append(expense)

    print("\nExpense added successfully!\n")


def view_expenses():

    if not expenses:

        print("\nNo expenses found.\n")

        return

    print("\nExpense List\n")

    total = 0

    for expense in expenses:

        print(
            f"{expense['category']} : ₹{expense['amount']}"
        )

        total += expense["amount"]

    print("\n----------------")

    print(f"Total Spent: ₹{total}")


while True:

    print("\n===== Expense Tracker =====")

    print("1. Add Expense")

    print("2. View Expenses")

    print("3. Exit")

    choice = input("Choose: ")

    if choice == "1":

        add_expense()

    elif choice == "2":

        view_expenses()

    elif choice == "3":

        print("Goodbye!")

        break

    else:

        print("Invalid choice!")