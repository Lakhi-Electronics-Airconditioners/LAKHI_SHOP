// Data.js
// This file would contain the structured bill data.
// It's assumed to be loaded before bill.html's script executes.

window.billData = {
    "MU401SSANAMD380015": {
        "name": "Mitansh Udernani",
        "addr1": "123, Main Street, Near Park",
        "ct": "Ahmedabad, Gujarat",
        "pincode": "380006",
        "20003": { // Quotation
            "type": 2, // 2 = Quotation
            "products": [
                { "PN": 1, "SR": "LAPHP001", "name": "HP Laptop 15s", "price": 55000, "qty": 1 },
                { "PN": 2, "SR": "MONLG002", "name": "LG 27-inch Monitor", "price": 18000, "qty": 2 },
                { "PN": 3, "SR": "KEYLOG003", "name": "Logitech Wireless Keyboard", "price": 2500, "qty": 1 }
            ],
            "billSubtotal": 93500, // Pre-set subtotal for this quote
            "billTax": "₹8,415 (9% GST)", // Pre-set tax
            "billTotal": "₹1,01,915" // Pre-set total
        },
        "10001": { // Invoice
            "type": 1, // 1 = Invoice
            "products": [
                { "PN": 1, "SR": "PHNSAM001", "name": "Samsung Galaxy S24", "price": 80000, "qty": 1 },
                { "PN": 2, "SR": "HEADSONY001", "name": "Sony WH-1000XM5 Headphones", "price": 28000, "qty": 1 }
            ],
            "billSubtotal": 108000,
            "billTax": "₹9,720 (9% GST)",
            "billTotal": "₹1,17,720"
        },
        "MYCUSTOMBILL": { // Custom Title
            "title": "C",
            "Cname": "Project Alpha Summary",
            "products": [
                { "PN": 1, "SR": "SVCWEB001", "name": "Web Development (Phase 1)", "price": 150000, "qty": 1 },
                { "PN": 2, "SR": "SVCSEO001", "name": "SEO Optimization Package", "price": 25000, "qty": 1 }
            ],
            "billSubtotal": 175000,
            "billTax": "Included in Price",
            "billTotal": "₹1,75,000"
        }
    },
    "ANOTHERCUST": {
        "name": "Another Customer",
        "addr1": "456, New Road, City Center",
        "ct": "Mumbai, Maharashtra",
        "pincode": "400001",
        "00001": { // Quotation
            "type": 2,
            "products": [
                { "PN": 1, "SR": "CAMCAN001", "name": "Canon DSLR Camera", "price": 70000, "qty": 1 }
            ],
            
        }
    },
    "SU401SSANAMD380015": {
        "name": "Sanjana Udernani",
        "addr1": "401, Sepal Solitaire, Anand Nager",
        "ct": "Ahmedabad, Gujarat",
        "pincode": "380015",
        "00001": { // Invoice
            "type": 1, // 1 = Invoice
            "products": [
                { "PN": 1, "SR": "PHNSAM001", "name": "Samsung Galaxy S24", "price": 80000, "qty": 1 },
                { "PN": 2, "SR": "HEADSONY001", "name": "Sony WH-1000XM5 Headphones", "price": 28000, "qty": 1 }
            ],
            "billSubtotal": 108000,
            "billTax": "₹9,720 (9% GST)",
            "billTotal": "₹1,15,720 (-2000 discount)"
        },
    }
};
