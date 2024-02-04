
2024 - 1 BT / Software Sector Salary Survey Results

Efforts were made to publish the salary survey results in charts/grid tables.

Survey by: Anketman / Altuğ: https://twitter.com/AltugAkgul
Frontend by: Sawacrow: https://twitter.com/sawacrow

Summary of Project Workflow:
- Data from Excel was converted to CSV, then to JSON, and saved as a local JSON file.
- Vue.js was used via CDN.
- A dynamic method was implemented for Chart.js.
- Data was grouped by/unique using lodash.js, then sent to Chart.js.
- Thus, a different Chart.js section was rendered for each column in the Chart.js method.
- tabulator.js was used for the datagrid table due to its filtering, sorting, and pagination features.

Libraries/Scripts Used:
- lodash.js
- tabulator.js
- vue.js
- bootstrap
- chart.js

TR:
2024 - 1 BT / Yazılım Sektörü Maaş Anketi Sonuçları

Maaş anket sonuçlarını charts / grid table olarak yayınlayabilmek için çalışma yapıldı.

Survey by: Anketman / Altuğ: https://twitter.com/AltugAkgul
Frontend by: Sawacrow: https://twitter.com/sawacrow

Proje işleyiş özeti:
-Excel'deki datalar CSV'e, sonrasında Json'a convertlenip, local json dosyası olarak kayıt edildi.
-Vue.js CDN olarak kullanıldı.
-Chart.js için dinamik bir method uygulandı.
-lodash.js ile datalar group-by/unique yapılıp, chart.js'e gönderildi.
-Böylece her chart.js methodunda ilgili column için farklı bir chart.js bölümü render edildi.
-Datagrid table için tabulator.js kullanıldı. Filter, sorting ve pagination özelliklerinin olmasından dolayı seçildi.

Kullanılan kütüphanaler / script'ler:
-lodash.js
-tabulator.js
-vue.js
-bootstrap
-chart.js