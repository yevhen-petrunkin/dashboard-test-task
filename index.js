import customers from "./data/customers.js";

const tableBodyRef = document.querySelector(".customers__table > tbody");

fillInTableData();

function fillInTableData() {
  const tableMarkupArr = [];

  customers.forEach((customer) => {
    const activeClassname = customer.active ? "active" : "";
    const btnText = customer.active ? "Active" : "Inactive";
    const markup = `<tr>
                  <td>${customer.customerName}</td>
                  <td>${customer.company}</td>
                  <td>${customer.phone}</td>
                  <td>${customer.email}</td>
                  <td>${customer.country}</td>
                  <td>
                    <button type="button" class="table__btn ${activeClassname}">
                      ${btnText}
                    </button>
                  </td>
                </tr>`;

    tableMarkupArr.push(markup);
  });

  tableBodyRef.insertAdjacentHTML("afterbegin", tableMarkupArr.join(""));
}
