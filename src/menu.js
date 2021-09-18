import "./menu-styles.css";

document.getElementById("menu").innerHTML = `
<table class="table" id="menu-table">
      <tr>
        <th>
          Name
        </th>
        <th>
          Price
        </th>
      </tr>
      <tr>
        <td>
          Chicken sandwich
        </td>
        <td>
          3,99 $
        </td>
      </tr>
      <tr>
        <td>
          Carbonara
        </td>
        <td>
          10,99 $
        </td>
      </tr>
      <tr>
        <td>
          BBQ Burger
        </td>
        <td>
          12,99 $
        </td>
      </tr>
      <tr>
        <td>
          Spare Ribs
        </td>
        <td>
          15,99 $
        </td>
      </tr>
      <tr>
        <td>
          Peking duck
        </td>
        <td>
          19,99 $
        </td>
      </tr>
    </table>
`;

document.getElementById("menu-table").style.textAlign = "left";
document.getElementById("menu-table").style.backgroundColor = "#f2f2f2";
