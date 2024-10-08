export const Regional=[{Name : "USA", Id : 1 },{ Name : "UK", Id : 2},{Name : "EU" , Id : 3},{Name : "Other", Id : 4}]
export const FieldType=["Simple Value","Multiple Value","Line items"]
export const DataType=["Text","Number","Date","Enum"]
export const ValueSource=["Capture","Data","Manual"]
export const  Editing=["Enabled","Disabled"]
// export const FieldCaptureJSON=[
//   {
//     "category": "section",
//     "id": "basic_info_section",
//     "label": "GeneralInformation",
//     "children": [
//       {
//         "rir_field_names": [
//           "document_id"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "document_id",
//         "label": "Document ID",
//         "type": "string",
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled"
//         }
//       },
//       {
//         "rir_field_names": [],
//         "category": "multivalue",
//         "id": "order_id_multi",
//         "label": "Order Number",
//         "description": "Purchase order identification.Rashi",
//         "hidden": false,
//         "disable_prediction": false,
//         "children": {
//           "rir_field_names": [
//             "order_id"
//           ],
//           "constraints": {
//             "required": false
//           },
//           "default_value": null,
//           "category": "datapoint",
//           "id": "order_id",
//           "label": "Order Number",
//           "description": "Purchase order identification.Rashi",
//           "hidden": false,
//           "type": "string",
//           "can_export": true,
//           "ui_configuration": {
//             "type": "captured",
//             "edit": "enabled"
//           }
//         },
//         "min_occurrences": null,
//         "max_occurrences": null,
//         "default_value": null,
//         "show_grid_by_default": false
//       },
//       {
//         "rir_field_names": [
//           "date_issue"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "date_issue",
//         "label": "Issue Date",
//         "type": "date",
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled"
//         },
//         "format": "M/D/YYYY"
//       },
//       {
//         "rir_field_names": [
//           "date_due"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "date_due",
//         "label": "Due Date",
//         "type": "date",
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled"
//         },
//         "format": "M/D/YYYY"
//       },
//       {
//         "rir_field_names": [
//           "document_type"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "document_type",
//         "label": "Document Type",
//         "type": "enum",
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled_without_warning"
//         },
//         "options": [
//           {
//             "value": "tax_invoice",
//             "label": "Tax Invoice"
//           },
//           {
//             "value": "credit_note",
//             "label": "Credit Note"
//           },
//           {
//             "value": "proforma",
//             "label": "Pro Forma Invoice"
//           },
//           {
//             "value": "debit_note",
//             "label": "Debit Note"
//           },
//           {
//             "value": "receipt",
//             "label": "Receipt"
//           },
//           {
//             "value": "delivery_note",
//             "label": "Delivery Note"
//           },
//           {
//             "value": "order",
//             "label": "Order"
//           },
//           {
//             "value": "other",
//             "label": "Other"
//           }
//         ]
//       },
//       {
//         "rir_field_names": [
//           "language"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "language",
//         "label": "Document Language",
//         "type": "enum",
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled_without_warning"
//         },
//         "options": [
//           {
//             "value": "eng",
//             "label": "EN"
//           },
//           {
//             "value": "deu",
//             "label": "DE"
//           },
//           {
//             "value": "ces",
//             "label": "CZ"
//           },
//           {
//             "value": "esp",
//             "label": "ESP"
//           },
//           {
//             "value": "slk",
//             "label": "SK"
//           },
//           {
//             "value": "fra",
//             "label": "FR"
//           },
//           {
//             "value": "dan",
//             "label": "DAN"
//           },
//           {
//             "value": "fin",
//             "label": "FIN"
//           },
//           {
//             "value": "hun",
//             "label": "HUN"
//           },
//           {
//             "value": "swe",
//             "label": "SWE"
//           },
//           {
//             "value": "ital",
//             "label": "ITAL"
//           },
//           {
//             "value": "nor",
//             "label": "NOR"
//           },
//           {
//             "value": "pol",
//             "label": "POL"
//           },
//           {
//             "value": "por",
//             "label": "POR"
//           },
//           {
//             "value": "other",
//             "label": "Other"
//           }
//         ]
//       },
//       {
//         "rir_field_names": [
//           "customer_id"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "customer_id",
//         "label": "Customer ID",
//         "hidden": true,
//         "type": "string",
//         "can_export": false,
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled"
//         }
//       },
//       {
//         "rir_field_names": [
//           "date_uzp"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "date_uzp",
//         "label": "Tax Point Date",
//         "hidden": true,
//         "type": "date",
//         "can_export": false,
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled"
//         },
//         "format": "M/D/YYYY"
//       },
//       {
//         "rir_field_names": [
//           "sender_order_id"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "sender_order_id",
//         "label": "Vendor Order ID",
//         "hidden": true,
//         "type": "string",
//         "can_export": false,
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled"
//         }
//       },
//       {
//         "rir_field_names": [
//           "delivery_note_id"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "delivery_note_id",
//         "label": "Delivery Note ID",
//         "hidden": true,
//         "type": "string",
//         "can_export": false,
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled"
//         }
//       },
//       {
//         "rir_field_names": [
//           "supply_place"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "supply_place",
//         "label": "Place of Supply",
//         "hidden": true,
//         "type": "string",
//         "can_export": false,
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled"
//         }
//       },
//       {
//         "rir_field_names": [],
//         "category": "multivalue",
//         "id": "r_id_multi",
//         "label": "Rashi",
//         "description": "Rashi jariwala",
//         "hidden": false,
//         "disable_prediction": false,
//         "children": {
//           "rir_field_names": [
//             "document_id"
//           ],
//           "constraints": {
//             "required": false
//           },
//           "default_value": null,
//           "category": "datapoint",
//           "id": "r_id",
//           "label": "Rashi",
//           "description": "Rashi jariwala",
//           "hidden": false,
//           "type": "enum",
//           "can_export": true,
//           "ui_configuration": {
//             "type": "captured",
//             "edit": "enabled"
//           },
//           "options": [],
//           "enum_value_type": "string"
//         },
//         "min_occurrences": null,
//         "max_occurrences": null,
//         "default_value": null,
//         "show_grid_by_default": false
//       },
//       {
//         "rir_field_names": [
//           "document_id"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "j_id",
//         "label": "Jignesh",
//         "hidden": false,
//         "disable_prediction": false,
//         "type": "string",
//         "can_export": true,
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled"
//         }
//       }
//     ],
//     "icon": null
//   },
//   {
//     "category": "section",
//     "id": "payment_info_section",
//     "label": "Payment Instructions",
//     "hidden": true,
//     "children": [
//       {
//         "rir_field_names": [
//           "account_num"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "account_num",
//         "label": "Account Number",
//         "hidden": true,
//         "type": "string",
//         "can_export": false,
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled"
//         }
//       },
//       {
//         "rir_field_names": [
//           "bank_num"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "bank_num",
//         "label": "Bank Code",
//         "hidden": true,
//         "type": "string",
//         "can_export": false,
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled"
//         }
//       },
//       {
//         "rir_field_names": [
//           "iban"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "iban",
//         "label": "IBAN",
//         "hidden": true,
//         "type": "string",
//         "can_export": false,
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled"
//         }
//       },
//       {
//         "rir_field_names": [
//           "bic"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "bic",
//         "label": "BIC/SWIFT",
//         "hidden": true,
//         "type": "string",
//         "can_export": false,
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled"
//         }
//       },
//       {
//         "rir_field_names": [
//           "terms"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "terms",
//         "label": "Terms",
//         "hidden": true,
//         "type": "string",
//         "can_export": false,
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled"
//         }
//       },
//       {
//         "rir_field_names": [
//           "const_sym"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "const_sym",
//         "label": "Constant Symbol",
//         "hidden": true,
//         "type": "string",
//         "can_export": false,
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled"
//         }
//       },
//       {
//         "rir_field_names": [
//           "var_sym"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "var_sym",
//         "label": "Payment Reference",
//         "hidden": true,
//         "type": "string",
//         "can_export": false,
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled"
//         }
//       },
//       {
//         "rir_field_names": [
//           "spec_sym"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "spec_sym",
//         "label": "Specific Symbol",
//         "hidden": true,
//         "type": "string",
//         "can_export": false,
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled"
//         }
//       },
//       {
//         "rir_field_names": [
//           "payment_method"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "payment_method",
//         "label": "Payment Method",
//         "hidden": true,
//         "type": "string",
//         "can_export": false,
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled"
//         }
//       }
//     ],
//     "icon": null
//   },
//   {
//     "category": "section",
//     "id": "totals_section",
//     "label": "Totals and Subtotals",
//     "children": [
//       {
//         "rir_field_names": [
//           "amount_total_base"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "amount_total_base",
//         "label": "Subtotal",
//         "type": "number",
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled"
//         },
//         "format": "#,##0.#"
//       },
//       {
//         "rir_field_names": [
//           "amount_total_tax"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "amount_total_tax",
//         "label": "Total Tax",
//         "type": "number",
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled"
//         },
//         "format": "#,##0.#"
//       },
//       {
//         "rir_field_names": [
//           "amount_due",
//           "amount_total"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "amount_due",
//         "label": "Amount Due",
//         "type": "number",
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled"
//         },
//         "format": "#,##0.#"
//       },
//       {
//         "rir_field_names": [
//           "currency"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "currency",
//         "label": "Currency",
//         "type": "enum",
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled_without_warning"
//         },
//         "options": [
//           {
//             "value": "usd",
//             "label": "USD"
//           },
//           {
//             "value": "gbp",
//             "label": "GBP"
//           },
//           {
//             "value": "eur",
//             "label": "EUR"
//           },
//           {
//             "value": "czk",
//             "label": "CZK"
//           },
//           {
//             "value": "nok",
//             "label": "NOK"
//           },
//           {
//             "value": "sek",
//             "label": "SEK"
//           },
//           {
//             "value": "aud",
//             "label": "AUD"
//           },
//           {
//             "value": "huf",
//             "label": "HUF"
//           },
//           {
//             "value": "inr",
//             "label": "INR"
//           },
//           {
//             "value": "dkk",
//             "label": "DKK"
//           },
//           {
//             "value": "chf",
//             "label": "CHF"
//           },
//           {
//             "value": "cny",
//             "label": "CNY"
//           },
//           {
//             "value": "jpy",
//             "label": "JPY"
//           },
//           {
//             "value": "pln",
//             "label": "PLN"
//           },
//           {
//             "value": "ron",
//             "label": "RON"
//           },
//           {
//             "value": "rub",
//             "label": "RUB"
//           },
//           {
//             "value": "other",
//             "label": "Other"
//           }
//         ]
//       },
//       {
//         "rir_field_names": [
//           "tax_details"
//         ],
//         "category": "multivalue",
//         "id": "tax_details",
//         "label": "VAT Rates",
//         "children": {
//           "rir_field_names": [],
//           "category": "tuple",
//           "id": "tax_detail",
//           "label": "VAT Rates",
//           "children": [
//             {
//               "rir_field_names": [
//                 "tax_detail_rate"
//               ],
//               "constraints": {
//                 "required": false
//               },
//               "default_value": null,
//               "category": "datapoint",
//               "id": "tax_detail_rate",
//               "label": "VAT Rate",
//               "type": "number",
//               "format": "# ##0.#"
//             },
//             {
//               "rir_field_names": [
//                 "tax_detail_base"
//               ],
//               "constraints": {
//                 "required": false
//               },
//               "default_value": null,
//               "category": "datapoint",
//               "id": "tax_detail_base",
//               "label": "VAT Base",
//               "type": "number",
//               "format": "# ##0.#"
//             },
//             {
//               "rir_field_names": [
//                 "tax_detail_tax"
//               ],
//               "constraints": {
//                 "required": false
//               },
//               "default_value": null,
//               "category": "datapoint",
//               "id": "tax_detail_tax",
//               "label": "VAT Amount",
//               "type": "number",
//               "format": "# ##0.#"
//             },
//             {
//               "rir_field_names": [
//                 "tax_detail_total"
//               ],
//               "constraints": {
//                 "required": false
//               },
//               "default_value": null,
//               "category": "datapoint",
//               "id": "tax_detail_total",
//               "label": "VAT Total",
//               "type": "number",
//               "format": "# ##0.#"
//             }
//           ]
//         },
//         "min_occurrences": null,
//         "max_occurrences": null,
//         "default_value": null,
//         "show_grid_by_default": false
//       },
//       {
//         "rir_field_names": [
//           "amount_rounding"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "amount_rounding",
//         "label": "Amount Rounding",
//         "hidden": true,
//         "type": "number",
//         "can_export": false,
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled"
//         },
//         "format": "#,##0.#"
//       },
//       {
//         "rir_field_names": [
//           "amount_paid"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "amount_paid",
//         "label": "Amount Paid",
//         "hidden": true,
//         "type": "number",
//         "can_export": false,
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled"
//         },
//         "format": "#,##0.#"
//       }
//     ],
//     "icon": null
//   },
//   {
//     "category": "section",
//     "id": "vendor_section",
//     "label": "Vendor & Customer",
//     "children": [
//       {
//         "rir_field_names": [
//           "sender_name"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "sender_name",
//         "label": "Vendor Name",
//         "type": "string",
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled"
//         }
//       },
//       {
//         "rir_field_names": [
//           "sender_address"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "sender_address",
//         "label": "Vendor Address",
//         "type": "string",
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled"
//         }
//       },
//       {
//         "rir_field_names": [
//           "sender_ic"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "sender_ic",
//         "label": "Vendor Company ID",
//         "hidden": true,
//         "type": "string",
//         "can_export": false,
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled"
//         }
//       },
//       {
//         "rir_field_names": [
//           "sender_vat_id",
//           "sender_dic"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "sender_vat_id",
//         "label": "Vendor VAT Number",
//         "hidden": true,
//         "type": "string",
//         "can_export": false,
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled"
//         }
//       },
//       {
//         "rir_field_names": [
//           "sender_email"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "sender_email",
//         "label": "Vendor Email",
//         "hidden": true,
//         "type": "string",
//         "can_export": false,
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled"
//         }
//       },
//       {
//         "rir_field_names": [
//           "recipient_name"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "recipient_name",
//         "label": "Customer Name",
//         "type": "string",
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled"
//         }
//       },
//       {
//         "rir_field_names": [
//           "recipient_address"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "recipient_address",
//         "label": "Customer Address",
//         "type": "string",
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled"
//         }
//       },
//       {
//         "rir_field_names": [
//           "recipient_ic"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "recipient_ic",
//         "label": "Customer Company ID",
//         "hidden": true,
//         "type": "string",
//         "can_export": false,
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled"
//         }
//       },
//       {
//         "rir_field_names": [
//           "recipient_vat_id",
//           "recipient_dic"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "recipient_vat_id",
//         "label": "Customer VAT Number",
//         "hidden": true,
//         "type": "string",
//         "can_export": false,
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled"
//         }
//       },
//       {
//         "rir_field_names": [
//           "recipient_delivery_name"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "recipient_delivery_name",
//         "label": "Customer Delivery Name",
//         "type": "string",
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled"
//         }
//       },
//       {
//         "rir_field_names": [
//           "recipient_delivery_address"
//         ],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "recipient_delivery_address",
//         "label": "Customer Delivery Address",
//         "type": "string",
//         "ui_configuration": {
//           "type": "captured",
//           "edit": "enabled"
//         }
//       }
//     ],
//     "icon": null
//   },
//   {
//     "category": "section",
//     "id": "line_items_section",
//     "label": "Line Items",
//     "children": [
//       {
//         "rir_field_names": [
//           "line_items"
//         ],
//         "category": "multivalue",
//         "id": "line_items",
//         "label": "Line Item",
//         "children": {
//           "rir_field_names": [],
//           "category": "tuple",
//           "id": "line_item",
//           "label": "Line Item",
//           "children": [
//             {
//               "rir_field_names": [
//                 "table_column_quantity"
//               ],
//               "constraints": {
//                 "required": false
//               },
//               "default_value": null,
//               "category": "datapoint",
//               "id": "item_quantity",
//               "label": "Quantity",
//               "type": "number",
//               "format": "#,##0.#"
//             },
//             {
//               "rir_field_names": [
//                 "table_column_code"
//               ],
//               "constraints": {
//                 "required": false
//               },
//               "default_value": null,
//               "category": "datapoint",
//               "id": "item_code",
//               "label": "Code",
//               "type": "string"
//             },
//             {
//               "rir_field_names": [
//                 "table_column_description"
//               ],
//               "width": 50,
//               "constraints": {
//                 "required": false
//               },
//               "default_value": null,
//               "category": "datapoint",
//               "id": "item_description",
//               "label": "Description",
//               "type": "string"
//             },
//             {
//               "rir_field_names": [
//                 "table_column_amount"
//               ],
//               "constraints": {
//                 "required": false
//               },
//               "default_value": null,
//               "category": "datapoint",
//               "id": "item_amount",
//               "label": "Unit Price",
//               "type": "number",
//               "format": "#,##0.#"
//             },
//             {
//               "rir_field_names": [
//                 "table_column_amount_total"
//               ],
//               "width": 15,
//               "constraints": {
//                 "required": false
//               },
//               "default_value": null,
//               "category": "datapoint",
//               "id": "item_amount_total",
//               "label": "Total Amount",
//               "type": "number",
//               "format": "#,##0.#",
//               "aggregations": {
//                 "sum": {
//                   "label": "Sum"
//                 }
//               }
//             },
//             {
//               "rir_field_names": [
//                 "table_column_uom"
//               ],
//               "constraints": {
//                 "required": false
//               },
//               "default_value": null,
//               "category": "datapoint",
//               "id": "item_uom",
//               "label": "UOM",
//               "hidden": true,
//               "type": "string",
//               "can_export": false
//             },
//             {
//               "rir_field_names": [
//                 "table_column_amount_base"
//               ],
//               "constraints": {
//                 "required": false
//               },
//               "default_value": null,
//               "category": "datapoint",
//               "id": "item_amount_base",
//               "label": "Unit Price Base",
//               "hidden": true,
//               "type": "number",
//               "can_export": false,
//               "format": "#,##0.#"
//             },
//             {
//               "rir_field_names": [
//                 "table_column_rate"
//               ],
//               "constraints": {
//                 "required": false
//               },
//               "default_value": null,
//               "category": "datapoint",
//               "id": "item_rate",
//               "label": "Tax Rate",
//               "hidden": true,
//               "type": "number",
//               "can_export": false,
//               "format": "#,##0.#"
//             },
//             {
//               "rir_field_names": [
//                 "table_column_tax"
//               ],
//               "constraints": {
//                 "required": false
//               },
//               "default_value": null,
//               "category": "datapoint",
//               "id": "item_tax",
//               "label": "Tax",
//               "hidden": true,
//               "type": "number",
//               "can_export": false,
//               "format": "#,##0.#"
//             },
//             {
//               "rir_field_names": [
//                 "table_column_amount_total_base"
//               ],
//               "width": 15,
//               "constraints": {
//                 "required": false
//               },
//               "default_value": null,
//               "category": "datapoint",
//               "id": "item_total_base",
//               "label": "Total Base",
//               "hidden": true,
//               "type": "number",
//               "can_export": false,
//               "format": "#,##0.#",
//               "aggregations": {
//                 "sum": {
//                   "label": "Sum"
//                 }
//               }
//             },
//             {
//               "rir_field_names": [
//                 "table_column_other"
//               ],
//               "constraints": {
//                 "required": false
//               },
//               "default_value": null,
//               "category": "datapoint",
//               "id": "item_other",
//               "label": "Other",
//               "hidden": true,
//               "type": "string",
//               "can_export": false
//             }
//           ]
//         },
//         "min_occurrences": null,
//         "max_occurrences": null,
//         "default_value": null,
//         "show_grid_by_default": false
//       }
//     ],
//     "icon": null
//   },
//   {
//     "category": "section",
//     "id": "other_section",
//     "label": "Other",
//     "children": [
//       {
//         "rir_field_names": [],
//         "constraints": {
//           "required": false
//         },
//         "default_value": null,
//         "category": "datapoint",
//         "id": "notes",
//         "label": "Internal Notes",
//         "type": "string",
//         "ui_configuration": {
//           "type": "manual",
//           "edit": "enabled"
//         }
//       }
//     ],
//     "icon": null
//   }
// ]
export const FieldCaptureJSON= [
    {
      "category": "section",
      "id": "basic_info_section",
      "label": "Basic Information",
      "children": [
        {
          "rir_field_names": [
            "InvoiceId",
            "Invoice_Id"
          ],
          "constraints": {
            "required": false
          },
          "default_value": null,
          "category": "datapoint",
          "id": "document_id",
          "label": "Document ID",
          "type": "string",
          "ui_configuration": {
            "type": "captured",
            "edit": "enabled"
          }
        },
        {
          "rir_field_names": [
            "PurchaseOrder",
            "purchase_order"
          ],
          "constraints": {
            "required": false
          },
          "default_value": null,
          "category": "datapoint",
          "id": "order_id",
          "label": "Order Number",
          "type": "string",
          "ui_configuration": {
            "type": "captured",
            "edit": "enabled"
          }
        },
        {
          "rir_field_names": [
            "InvoiceDate",
            "invoice_date"
          ],
          "constraints": {
            "required": false
          },
          "default_value": null,
          "category": "datapoint",
          "id": "date_issue",
          "label": "Issue Date",
          "type": "date",
          "ui_configuration": {
            "type": "captured",
            "edit": "enabled"
          },
          "format": "M/D/YYYY"
        },
        {
          "rir_field_names": [
            "DueDate",
            "due_date"
          ],
          "constraints": {
            "required": false
          },
          "default_value": null,
          "category": "datapoint",
          "id": "date_due",
          "label": "Due Date",
          "type": "date",
          "ui_configuration": {
            "type": "captured",
            "edit": "enabled"
          },
          "format": "M/D/YYYY"
        },
        {
          "rir_field_names": [
            "document_type"
          ],
          "constraints": {
            "required": false
          },
          "default_value": null,
          "category": "datapoint",
          "id": "document_type",
          "label": "Document Type",
          "type": "enum",
          "ui_configuration": {
            "type": "captured",
            "edit": "enabled_without_warning"
          },
          "options": [
            {
              "value": "tax_invoice",
              "label": "Tax Invoice"
            },
            {
              "value": "credit_note",
              "label": "Credit Note"
            },
            {
              "value": "proforma",
              "label": "Pro Forma Invoice"
            },
            {
              "value": "debit_note",
              "label": "Debit Note"
            },
            {
              "value": "receipt",
              "label": "Receipt"
            },
            {
              "value": "delivery_note",
              "label": "Delivery Note"
            },
            {
              "value": "order",
              "label": "Order"
            },
            {
              "value": "other",
              "label": "Other"
            }
          ]
        },
        {
          "rir_field_names": [
            "language"
          ],
          "constraints": {
            "required": false
          },
          "default_value": null,
          "category": "datapoint",
          "id": "language",
          "label": "Document Language",
          "type": "enum",
          "ui_configuration": {
            "type": "captured",
            "edit": "enabled_without_warning"
          },
          "options": [
            {
              "value": "eng",
              "label": "EN"
            },
            {
              "value": "deu",
              "label": "DE"
            },
            {
              "value": "ces",
              "label": "CZ"
            },
            {
              "value": "esp",
              "label": "ESP"
            },
            {
              "value": "slk",
              "label": "SK"
            },
            {
              "value": "fra",
              "label": "FR"
            },
            {
              "value": "dan",
              "label": "DAN"
            },
            {
              "value": "fin",
              "label": "FIN"
            },
            {
              "value": "hun",
              "label": "HUN"
            },
            {
              "value": "swe",
              "label": "SWE"
            },
            {
              "value": "ital",
              "label": "ITAL"
            },
            {
              "value": "nor",
              "label": "NOR"
            },
            {
              "value": "pol",
              "label": "POL"
            },
            {
              "value": "por",
              "label": "POR"
            },
            {
              "value": "other",
              "label": "Other"
            }
          ]
        }
      ],
      "icon": null
    },
    {
      "category": "section",
      "id": "payment_info_section",
      "label": "Payment Instructions",
      "hidden": true,
      "children": [
        {
          "rir_field_names": [
            "account_num",
            "Current A/c. No",
            "account number",
            "account no",
            "account #",
            "acc no",
            "A/c. No",
            "A/c. No.",
            "A/c No",
            "A/c No.",
            "ac no",
            "ac no.",
            "acc #",
            "acct number",
            "acct no",
            "acct #",
            "customer account number",
            "customer account no",
            "customer account #",
            "client account number",
            "client account no",
            "client account #",
            "billing account number",
            "billing account no",
            "billing account #",
            "account id"
          ],
          "constraints": {
            "required": false
          },
          "default_value": null,
          "category": "datapoint",
          "id": "account_num",
          "label": "Account Number",
          "hidden": true,
          "type": "string",
          "can_export": false,
          "ui_configuration": {
            "type": "captured",
            "edit": "enabled"
          }
        },
        {
          "rir_field_names": [
            "bank_num",
            "IFS Code",
            "bank code",
            "bank identifier",
            "bank identification code",
            "bic",
            "swift code",
            "sort code",
            "routing number"
          ],
          "constraints": {
            "required": false
          },
          "default_value": null,
          "category": "datapoint",
          "id": "bank_num",
          "label": "Bank Code",
          "hidden": true,
          "type": "string",
          "can_export": false,
          "ui_configuration": {
            "type": "captured",
            "edit": "enabled"
          }
        },
        {
          "rir_field_names": [
            "iban",
            "international bank account number",
            "iban number"
          ],
          "constraints": {
            "required": false
          },
          "default_value": null,
          "category": "datapoint",
          "id": "iban",
          "label": "IBAN",
          "hidden": true,
          "type": "string",
          "can_export": false,
          "ui_configuration": {
            "type": "captured",
            "edit": "enabled"
          }
        },
        {
          "rir_field_names": [
            "bic",
            "bic",
            "swift code",
            "swift-bic",
            "bank identifier code",
            "bank code",
            "swift-bic code"
          ],
          "constraints": {
            "required": false
          },
          "default_value": null,
          "category": "datapoint",
          "id": "bic",
          "label": "BIC/SWIFT",
          "hidden": true,
          "type": "string",
          "can_export": false,
          "ui_configuration": {
            "type": "captured",
            "edit": "enabled"
          }
        },
        {
          "rir_field_names": [
            "terms",
            "terms",
            "payment terms",
            "terms of payment",
            "invoice terms",
            "payment conditions",
            "terms and conditions"
          ],
          "constraints": {
            "required": false
          },
          "default_value": null,
          "category": "datapoint",
          "id": "terms",
          "label": "Terms",
          "hidden": true,
          "type": "string",
          "can_export": false,
          "ui_configuration": {
            "type": "captured",
            "edit": "enabled"
          }
        },
        {
          "rir_field_names": [
            "const_sym",
            "constant symbol",
            "constant number",
            "constant symbol number",
            "constant code"
          ],
          "constraints": {
            "required": false
          },
          "default_value": null,
          "category": "datapoint",
          "id": "const_sym",
          "label": "Constant Symbol",
          "hidden": true,
          "type": "string",
          "can_export": false,
          "ui_configuration": {
            "type": "captured",
            "edit": "enabled"
          }
        },
        {
          "rir_field_names": [
            "var_sym",
            "payment reference",
            "reference number",
            "payment ref",
            "invoice reference",
            "payment id",
            "transaction reference"
          ],
          "constraints": {
            "required": false
          },
          "default_value": null,
          "category": "datapoint",
          "id": "var_sym",
          "label": "Payment Reference",
          "hidden": true,
          "type": "string",
          "can_export": false,
          "ui_configuration": {
            "type": "captured",
            "edit": "enabled"
          }
        },
        {
          "rir_field_names": [
            "spec_sym"
          ],
          "constraints": {
            "required": false
          },
          "default_value": null,
          "category": "datapoint",
          "id": "spec_sym",
          "label": "Specific Symbol",
          "hidden": true,
          "type": "string",
          "can_export": false,
          "ui_configuration": {
            "type": "captured",
            "edit": "enabled"
          }
        },
        {
          "rir_field_names": [
            "payment_method",
            "payment method",
            "payment type",
            "method of payment",
            "payment mode",
            "payment mode.",
            "payment way",
            "payment option"
          ],
          "constraints": {
            "required": false
          },
          "default_value": null,
          "category": "datapoint",
          "id": "payment_method",
          "label": "Payment Method",
          "hidden": true,
          "type": "string",
          "can_export": false,
          "ui_configuration": {
            "type": "captured",
            "edit": "enabled"
          }
        }
      ],
      "icon": null
    },
    {
      "category": "section",
      "id": "totals_section",
      "label": "Totals and Subtotals",
      "children": [
        {
          "rir_field_names": [
            "SubTotal",
            "net_amount"
          ],
          "constraints": {
            "required": false
          },
          "default_value": null,
          "category": "datapoint",
          "id": "amount_total_base",
          "label": "Subtotal",
          "type": "number",
          "ui_configuration": {
            "type": "captured",
            "edit": "enabled"
          },
          "format": "#,##0.#"
        },
        {
          "rir_field_names": [
            "TotalTax",
            "total_tax_amount"
          ],
          "constraints": {
            "required": false
          },
          "default_value": null,
          "category": "datapoint",
          "id": "amount_total_tax",
          "label": "Total Tax",
          "type": "number",
          "ui_configuration": {
            "type": "captured",
            "edit": "enabled"
          },
          "format": "#,##0.#"
        },
        {
          "rir_field_names": [
            "AmountDue"
          ],
          "constraints": {
            "required": false
          },
          "default_value": null,
          "category": "datapoint",
          "id": "amount_due",
          "label": "Amount Due",
          "type": "number",
          "ui_configuration": {
            "type": "captured",
            "edit": "enabled"
          },
          "format": "#,##0.#"
        },
        {
          "rir_field_names": [
            "currency"
          ],
          "constraints": {
            "required": false
          },
          "default_value": null,
          "category": "datapoint",
          "id": "currency",
          "label": "Currency",
          "type": "enum",
          "ui_configuration": {
            "type": "captured",
            "edit": "enabled_without_warning"
          },
          "options": [
            {
              "value": "usd",
              "label": "USD"
            },
            {
              "value": "gbp",
              "label": "GBP"
            },
            {
              "value": "eur",
              "label": "EUR"
            },
            {
              "value": "czk",
              "label": "CZK"
            },
            {
              "value": "nok",
              "label": "NOK"
            },
            {
              "value": "sek",
              "label": "SEK"
            },
            {
              "value": "aud",
              "label": "AUD"
            },
            {
              "value": "huf",
              "label": "HUF"
            },
            {
              "value": "inr",
              "label": "INR"
            },
            {
              "value": "dkk",
              "label": "DKK"
            },
            {
              "value": "chf",
              "label": "CHF"
            },
            {
              "value": "cny",
              "label": "CNY"
            },
            {
              "value": "jpy",
              "label": "JPY"
            },
            {
              "value": "pln",
              "label": "PLN"
            },
            {
              "value": "ron",
              "label": "RON"
            },
            {
              "value": "rub",
              "label": "RUB"
            },
            {
              "value": "other",
              "label": "Other"
            }
          ]
        },
        {
          "rir_field_names": [
            "tax_details"
          ],
          "category": "multivalue",
          "id": "tax_details",
          "label": "VAT Rates",
          "children": {
            "rir_field_names": [],
            "category": "tuple",
            "id": "tax_detail",
            "label": "VAT Rates",
            "children": [
              {
                "rir_field_names": [
                  "tax_detail_rate"
                ],
                "constraints": {
                  "required": false
                },
                "default_value": null,
                "category": "datapoint",
                "id": "tax_detail_rate",
                "label": "VAT Rate",
                "type": "number",
                "format": "# ##0.#"
              },
              {
                "rir_field_names": [
                  "tax_detail_base"
                ],
                "constraints": {
                  "required": false
                },
                "default_value": null,
                "category": "datapoint",
                "id": "tax_detail_base",
                "label": "VAT Base",
                "type": "number",
                "format": "# ##0.#"
              },
              {
                "rir_field_names": [
                  "tax_detail_tax"
                ],
                "constraints": {
                  "required": false
                },
                "default_value": null,
                "category": "datapoint",
                "id": "tax_detail_tax",
                "label": "VAT Amount",
                "type": "number",
                "format": "# ##0.#"
              },
              {
                "rir_field_names": [
                  "tax_detail_total"
                ],
                "constraints": {
                  "required": false
                },
                "default_value": null,
                "category": "datapoint",
                "id": "tax_detail_total",
                "label": "VAT Total",
                "type": "number",
                "format": "# ##0.#"
              }
            ]
          },
          "hidden": true,
          "min_occurrences": null,
          "max_occurrences": null,
          "default_value": null,
          "show_grid_by_default": false
        },
        {
          "rir_field_names": [
            "InvoiceTotal",
            "total_amount"
          ],
          "constraints": {
            "required": false
          },
          "default_value": null,
          "category": "datapoint",
          "id": "total_amount",
          "label": "Total Amount",
          "type": "number",
          "can_export": false,
          "ui_configuration": {
            "type": "captured",
            "edit": "enabled"
          },
          "format": "#,##0.#"
        },
        {
          "rir_field_names": [
            "amount_paid"
          ],
          "constraints": {
            "required": false
          },
          "default_value": null,
          "category": "datapoint",
          "id": "amount_paid",
          "label": "Amount Paid",
          "hidden": true,
          "type": "number",
          "can_export": false,
          "ui_configuration": {
            "type": "captured",
            "edit": "enabled"
          },
          "format": "#,##0.#"
        }
      ],
      "icon": null
    },
    {
      "category": "section",
      "id": "vendor_section",
      "label": "Vendor & Customer",
      "children": [
        {
          "rir_field_names": [
            "VendorName",
            "supplier_name"
          ],
          "constraints": {
            "required": false
          },
          "default_value": null,
          "category": "datapoint",
          "id": "sender_name",
          "label": "Vendor Name",
          "type": "string",
          "ui_configuration": {
            "type": "captured",
            "edit": "enabled"
          }
        },
        {
          "rir_field_names": [
            "VendorAddress",
            "supplier_address"
          ],
          "constraints": {
            "required": false
          },
          "default_value": null,
          "category": "datapoint",
          "id": "sender_address",
          "label": "Vendor Address",
          "type": "string",
          "ui_configuration": {
            "type": "captured",
            "edit": "enabled"
          }
        },
        {
          "rir_field_names": [
            "sender_ic",
            "vendor company",
            "supplier company",
            "provider company",
            "seller company",
            "company name",
            "business name"
          ],
          "constraints": {
            "required": false
          },
          "default_value": null,
          "category": "datapoint",
          "id": "sender_ic",
          "label": "Vendor Company ID",
          "hidden": true,
          "type": "string",
          "can_export": false,
          "ui_configuration": {
            "type": "captured",
            "edit": "enabled"
          }
        },
        {
          "rir_field_names": [
            "sender_vat_id",
            "sender_dic"
          ],
          "constraints": {
            "required": false
          },
          "default_value": null,
          "category": "datapoint",
          "id": "sender_vat_id",
          "label": "Vendor VAT Number",
          "hidden": true,
          "type": "string",
          "can_export": false,
          "ui_configuration": {
            "type": "captured",
            "edit": "enabled"
          }
        },
        {
          "rir_field_names": [
            "sender_email",
            "vendor email",
            "supplier email",
            "provider email",
            "seller email",
            "email address",
            "contact email",
            "vendor e-mail",
            "supplier e-mail",
            "provider e-mail",
            "seller e-mail",
            "e-mail address",
            "contact e-mail",
            "e-mail",
            "email"
          ],
          "constraints": {
            "required": false
          },
          "default_value": null,
          "category": "datapoint",
          "id": "sender_email",
          "label": "Vendor Email",
          "hidden": true,
          "type": "string",
          "can_export": false,
          "ui_configuration": {
            "type": "captured",
            "edit": "enabled"
          }
        },
        {
          "rir_field_names": [
            "CustomerName",
            "receiver_name"
          ],
          "constraints": {
            "required": false
          },
          "default_value": null,
          "category": "datapoint",
          "id": "recipient_name",
          "label": "Customer Name",
          "type": "string",
          "ui_configuration": {
            "type": "captured",
            "edit": "enabled"
          }
        },
        {
          "rir_field_names": [
            "CustomerAddress",
            "receiver_address"
          ],
          "constraints": {
            "required": false
          },
          "default_value": null,
          "category": "datapoint",
          "id": "recipient_address",
          "label": "Customer Address",
          "type": "string",
          "ui_configuration": {
            "type": "captured",
            "edit": "enabled"
          }
        },
        {
          "rir_field_names": [
            "recipient_ic"
          ],
          "constraints": {
            "required": false
          },
          "default_value": null,
          "category": "datapoint",
          "id": "recipient_ic",
          "label": "Customer Company ID",
          "hidden": true,
          "type": "string",
          "can_export": false,
          "ui_configuration": {
            "type": "captured",
            "edit": "enabled"
          }
        },
        {
          "rir_field_names": [
            "recipient_vat_id",
            "recipient_dic"
          ],
          "constraints": {
            "required": false
          },
          "default_value": null,
          "category": "datapoint",
          "id": "recipient_vat_id",
          "label": "Customer VAT Number",
          "hidden": true,
          "type": "string",
          "can_export": false,
          "ui_configuration": {
            "type": "captured",
            "edit": "enabled"
          }
        }
      ],
      "icon": null
    },
    {
      "category": "section",
      "id": "line_items_section",
      "label": "Line Items",
      "children": [
        {
          "rir_field_names": [
            "line_items"
          ],
          "category": "multivalue",
          "id": "line_items",
          "label": "Line Item",
          "children": {
            "rir_field_names": [],
            "category": "tuple",
            "id": "line_item",
            "label": "Line Item",
            "children": [
              {
                "rir_field_names": [
                  "table_column_quantity"
                ],
                "constraints": {
                  "required": false
                },
                "default_value": null,
                "category": "datapoint",
                "id": "item_quantity",
                "label": "Quantity",
                "type": "number",
                "format": "#,##0.#"
              },
              {
                "rir_field_names": [
                  "table_column_code"
                ],
                "constraints": {
                  "required": false
                },
                "default_value": null,
                "category": "datapoint",
                "id": "item_code",
                "label": "Code",
                "type": "string"
              },
              {
                "rir_field_names": [
                  "table_column_description"
                ],
                "width": 50,
                "constraints": {
                  "required": false
                },
                "default_value": null,
                "category": "datapoint",
                "id": "item_description",
                "label": "Description",
                "type": "string"
              },
              {
                "rir_field_names": [
                  "table_column_amount"
                ],
                "constraints": {
                  "required": false
                },
                "default_value": null,
                "category": "datapoint",
                "id": "item_amount",
                "label": "Unit Price",
                "type": "number",
                "format": "#,##0.#"
              },
              {
                "rir_field_names": [
                  "table_column_amount_total"
                ],
                "width": 15,
                "constraints": {
                  "required": false
                },
                "default_value": null,
                "category": "datapoint",
                "id": "item_amount_total",
                "label": "Total Amount",
                "type": "number",
                "format": "#,##0.#",
                "aggregations": {
                  "sum": {
                    "label": "Sum"
                  }
                }
              },
              {
                "rir_field_names": [
                  "table_column_uom"
                ],
                "constraints": {
                  "required": false
                },
                "default_value": null,
                "category": "datapoint",
                "id": "item_uom",
                "label": "UOM",
                "hidden": true,
                "type": "string",
                "can_export": false
              },
              {
                "rir_field_names": [
                  "table_column_amount_base"
                ],
                "constraints": {
                  "required": false
                },
                "default_value": null,
                "category": "datapoint",
                "id": "item_amount_base",
                "label": "Unit Price Base",
                "hidden": true,
                "type": "number",
                "can_export": false,
                "format": "#,##0.#"
              },
              {
                "rir_field_names": [
                  "table_column_rate"
                ],
                "constraints": {
                  "required": false
                },
                "default_value": null,
                "category": "datapoint",
                "id": "item_rate",
                "label": "Tax Rate",
                "hidden": true,
                "type": "number",
                "can_export": false,
                "format": "#,##0.#"
              },
              {
                "rir_field_names": [
                  "table_column_tax"
                ],
                "constraints": {
                  "required": false
                },
                "default_value": null,
                "category": "datapoint",
                "id": "item_tax",
                "label": "Tax",
                "hidden": true,
                "type": "number",
                "can_export": false,
                "format": "#,##0.#"
              },
              {
                "rir_field_names": [
                  "table_column_amount_total_base"
                ],
                "width": 15,
                "constraints": {
                  "required": false
                },
                "default_value": null,
                "category": "datapoint",
                "id": "item_total_base",
                "label": "Total Base",
                "hidden": true,
                "type": "number",
                "can_export": false,
                "format": "#,##0.#",
                "aggregations": {
                  "sum": {
                    "label": "Sum"
                  }
                }
              },
              {
                "rir_field_names": [
                  "table_column_other"
                ],
                "constraints": {
                  "required": false
                },
                "default_value": null,
                "category": "datapoint",
                "id": "item_other",
                "label": "Other",
                "hidden": true,
                "type": "string",
                "can_export": false
              }
            ]
          },
          "min_occurrences": null,
          "max_occurrences": null,
          "default_value": null,
          "show_grid_by_default": false
        }
      ],
      "icon": null,
      "hidden": true
    },
    {
      "category": "section",
      "id": "other_section",
      "label": "Other",
      "children": [
        {
          "rir_field_names": [],
          "constraints": {
            "required": false
          },
          "default_value": null,
          "category": "datapoint",
          "id": "notes",
          "label": "Internal Notes",
          "type": "string",
          "ui_configuration": {
            "type": "manual",
            "edit": "enabled"
          }
        }
      ],
      "icon": null,
      "hidden": true
    }
  ]
