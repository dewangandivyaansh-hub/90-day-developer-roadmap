expenses = []


def add_expense():

    category = input("Category: ")

    amount = float(input("Amount: ₹"))

    expenses.append({
        "category": category,
        "amount": amount
    })

    print("\nExpense added successfully!\n")


def view_expenses():

    if not expenses:

        print("\nNo expenses found.\n")

        return

    total = 0

    print("\nExpense List\n")

    for index, expense in enumerate(expenses):

        print(
            f"{index + 1}. {expense['category']} : ₹{expense['amount']}"
        )

        total += expense["amount"]

    print("----------------")

    print(f"Total Spending: ₹{total}")


def search_expense():

    category = input("Enter category: ")

    found = False

    for expense in expenses:

        if expense["category"].lower() == category.lower():

            print(
                f"{expense['category']} : ₹{expense['amount']}"
            )

            found = True

    if not found:

        print("No expense found.")


def delete_expense():

    view_expenses()

    if not expenses:

        return

    number = int(input("\nEnter expense number to delete: "))

    if 1 <= number <= len(expenses):

        removed = expenses.pop(number - 1)

        print(
            f"{removed['category']} deleted successfully."
        )

    else:

        print("Invalid expense number.")


while True:

    print("\n===== Expense Tracker =====")

    print("1. Add Expense")

    print("2. View Expenses")

    print("3. Search Expense")

    print("4. Delete Expense")

    print("5. Exit")

    choice = input("Choose: ")

    if choice == "1":

        add_expense()

    elif choice == "2":

        view_expenses()

    elif choice == "3":

        search_expense()

    elif choice == "4":

        delete_expense()

    elif choice == "5":

        print("Goodbye!")

        break

    else:

        print("Invalid choice!")