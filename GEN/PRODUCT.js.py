import json

def get_product_input(prompt, allow_empty=False, default_value=None):
    """
    Gets input from the user, handles 'X' for stopping or skipping,
    and returns None or a default value for empty inputs.
    """
    while True:
        user_input = input(prompt).strip()
        if user_input.lower() == 'x':
            return 'x' # Special signal to stop or skip
        if not user_input and allow_empty:
            return default_value
        if user_input:
            return user_input
        print("Input cannot be empty. Please provide a value or 'X' to skip/exit.")

def generate_products_data():
    """
    Collects product details from terminal input and generates a JSON file.
    """
    products = []
    print("--- Enter Product Details (Type 'X' for all fields to stop) ---")

    while True:
        print("\n--- New Product ---")
        serial_no = get_product_input("Enter Serial Number: ")
        if serial_no.lower() == 'x':
            break

        name = get_product_input("Enter Product Name: ")
        if name.lower() == 'x': break

        price = get_product_input("Enter Price: ")
        if price.lower() == 'x': break
        if price == '0000':
            price_value = "Price not available"
        else:
            price_value = price

        rating_stars_input = get_product_input("Enter Rating Stars: ", allow_empty=True)
        if rating_stars_input.lower() == 'x': break
        rating_stars = float(rating_stars_input) if rating_stars_input else None

        rating_source_icon_per = get_product_input("Enter Rating Source Icon Path: ", allow_empty=True)
        if rating_source_icon_per.lower() == 'x': break
        if not rating_source_icon_per: rating_source_icon = None
        rating_source_icon = "img/OCOL/" + rating_source_icon_per

        product_type = get_product_input("Enter Product Type: ", allow_empty=True)
        if product_type.lower() == 'x': break
        if not product_type: product_type = None

        unit_of_sale = get_product_input("Enter Unit of Sale: ", allow_empty=True, default_value="unit")
        if unit_of_sale.lower() == 'x': unit_of_sale = "unit" # Default if 'X' is explicitly entered here
        
        ac_tr_input = get_product_input("Enter AC Tonnage: ", allow_empty=True)
        if ac_tr_input.lower() == 'x': ac_tr = None # Ensure it's None if 'X'
        else: ac_tr = float(ac_tr_input) if ac_tr_input else None # Keep None if empty but not 'X'

        ac_type_input = get_product_input("Enter AC Type: ", allow_empty=True)
        if ac_type_input.lower() == 'x': ac_type = None
        else: ac_type = ac_type_input if ac_type_input else None

        ac_star_input = get_product_input("Enter AC Star Rating: ", allow_empty=True)
        if ac_star_input.lower() == 'x': ac_star = None
        else: ac_star = int(ac_star_input) if ac_star_input else None

        description = get_product_input("Enter Product Description : ", allow_empty=True)
        if description.lower() == 'x': description = "No description available."
        elif not description: description = "No description available." # Default if empty


        product_data = {
            "serial_no": serial_no,
            "name": name,
            "price": price_value,
            "rating_stars": rating_stars,
            "rating_source_icon": (rating_source_icon),
            "type": product_type,
            "unit": unit_of_sale, # New field
            "AC-TR": ac_tr,
            "AC-Type": ac_type,
            "AC-STAR": ac_star,
            "description": description
        }
        products.append(product_data)

    # Save data to products_data.js
    file_name = "products_data-made.js"
    try:
        with open(file_name, 'w') as f:
            # Use json.dump for pretty printing and ensuring valid JSON
            json.dump(products, f, indent=2)
        print(f"\nSuccessfully generated {len(products)} products and saved to '{file_name}'")
    except Exception as e:
        print(f"\nError saving data to file: {e}")

if __name__ == "__main__":
    generate_products_data()
