window.addEventListener("load", function (event) {
  const { createApp } = Vue;

  createApp({
    data() {
      return {
        message: "Hello Vue!",
        table: "table iss null",
        genders: "",
      };
    },
    methods: {
      getJson() {
        console.log("get data");
        fetch("./csvjson.json")
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((jsonData) => {
            // Function to count unique values
            //console.log(jsonData);
            this.table = jsonData;
            this.getSalaries();
            this.getExp();
            this.getPositions();
            this.getTitles();
            this.getCompanyLoc();
            this.getCompanyCityIfTurkey();
            this.getRemoteOrHybrid();
            this.getBenefits();
            this.getEmployeeCount();
            this.getGenders();
            this.getTechs();
            this.getCurrencyType();
            this.getIncreaseSalaryCount();
            this.getIncreaseSalaryRatio();
            this.getDailyFoodPrice();
            this.runDataGrid();
            
          })
          .catch((error) => {
            console.error("There was a problem fetching the data:", error);
          });
      },
      getGenders() {
        console.log("thistableer", this.table);
        const groupedCounts = _.groupBy(this.table, "Cinsiyet");
        const result = _.map(groupedCounts, (value, key) => [
          key,
          value.length,
        ]);

        console.table(result);
        this.genders = result;

        this.createChart(result, "Kadın / Erkek Oranı", "pie");
      },
      getSalaries() {
        console.log("thistableer", this.table);
        const groupedCounts = _.groupBy(
          this.table,
          'Maaş / Aylık Türk Lirası cinsinden          (Ortalama "NET" ücret)'
        );
        const result = _.map(groupedCounts, (value, key) => [
          key,
          value.length,
        ]);

        console.table(result);
        this.genders = result;
        this.createChart(result, "Maaş Aralıkları", "bar");
      },
      //yan haklar problemli. bakılcak.
      getBenefits() {
        console.log("thistableer", this.table);
        const groupedCounts = _.groupBy(this.table, "Yan haklarınız");
        const result = _.map(groupedCounts, (value, key) => [
          key,
          value.length,
        ]);

        console.table(result);
        this.genders = result;
        this.createChart(result, "Yan Haklarınız", "bar", "y");
      },
      getExp() {
        console.log("thistableer", this.table);
        const groupedCounts = _.groupBy(this.table, "Deneyim");
        const result = _.map(groupedCounts, (value, key) => [
          key,
          value.length,
        ]);

        console.table(result);
        this.genders = result;
        this.createChart(result, "Deneyim Aralığı", "bar");
      },
      getCompanyLoc() {
        console.log("thistableer", this.table);
        const groupedCounts = _.groupBy(
          this.table,
          "Şirketiniz hangi lokasyon merkezli?"
        );
        const result = _.map(groupedCounts, (value, key) => [
          key,
          value.length,
        ]);

        console.table(result);
        this.genders = result;
        this.createChart(result, "Şirketiniz hangi lokasyon merkezli?", "bar");
      },
      getCompanyCityIfTurkey() {
        const groupedCounts = _.groupBy(
          this.table,
          "Şirketiniz hangi şehirde? (Eğer Türkiye ise)"
        );
        const result = _.map(groupedCounts, (value, key) => [
          key,
          value.length,
        ]);

        console.table(result);
        this.genders = result;
        this.createChart(
          result,
          "Şirketiniz hangi şehirde? (Eğer Türkiye ise)",
          "bar"
        );
      },
      getRemoteOrHybrid() {
        const groupedCounts = _.groupBy(this.table, "Çalışma şekliniz nedir?");
        const result = _.map(groupedCounts, (value, key) => [
          key,
          value.length,
        ]);

        console.table(result);
        this.genders = result;
        this.createChart(result, "Çalışma şekliniz nedir?", "bar");
      },
      getEmployeeCount() {
        const groupedCounts = _.groupBy(
          this.table,
          "Şirketinizin çalışan sayısı nedir?"
        );
        const result = _.map(groupedCounts, (value, key) => [
          key,
          value.length,
        ]);

        console.table(result);
        this.genders = result;
        this.createChart(result, "Şirketinizin çalışan sayısı nedir?", "bar");
      },
      getPositions() {
        const groupedCounts = _.groupBy(
          this.table,
          "Hangi pozisyonda çalışıyorsunuz?"
        );
        const result = _.map(groupedCounts, (value, key) => [
          key,
          value.length,
        ]);

        console.table(result);
        this.genders = result;
        this.createChart(
          result,
          "Hangi pozisyonda çalışıyorsunuz?",
          "bar",
          "y"
        );
      },
      getTitles() {
        const groupedCounts = _.groupBy(
          this.table,
          "Çalıştığınız şirketteki unvanınız nedir?"
        );
        const result = _.map(groupedCounts, (value, key) => [
          key,
          value.length,
        ]);

        console.table(result);
        this.genders = result;
        this.createChart(
          result,
          "Çalıştığınız şirketteki unvanınız nedir?",
          "bar",
          "y"
        );
      },
      getTechs() {
        const groupedCounts = _.groupBy(
          this.table,
          "Ağırlıklı olarak hangi teknolojileri / dilleri kullanıyorsunuz?"
        );
        const result = _.map(groupedCounts, (value, key) => [
          key,
          value.length,
        ]);

        console.table(result);
        this.genders = result;
        this.createChart(
          result,
          "Ağırlıklı olarak hangi teknolojileri / dilleri kullanıyorsunuz?",
          "bar",
          "y"
        );
      },
      getCurrencyType() {
        const groupedCounts = _.groupBy(
          this.table,
          "Kazancınız hangi para biriminde?"
        );
        const result = _.map(groupedCounts, (value, key) => [
          key,
          value.length,
        ]);

        console.table(result);
        this.genders = result;
        this.createChart(result, "Kazancınız hangi para biriminde?", "pie");
      },
      getIncreaseSalaryCount() {
        const groupedCounts = _.groupBy(
          this.table,
          "Senede kaç kez zam alıyorsunuz?"
        );
        const result = _.map(groupedCounts, (value, key) => [
          key,
          value.length,
        ]);

        console.table(result);
        this.genders = result;
        this.createChart(result, "Senede kaç kez zam alıyorsunuz?", "pie", "x");
      },
      getIncreaseSalaryRatio() {
        const groupedCounts = _.groupBy(
          this.table,
          "Ara zam / iyileştirme oranınız hangi aralıkta?"
        );
        const result = _.map(groupedCounts, (value, key) => [
          key,
          value.length,
        ]);

        console.table(result);
        this.genders = result;
        this.createChart(
          result,
          "Ara zam / iyileştirme oranınız hangi aralıkta?",
          "bar",
          "x"
        );
      },
      getDailyFoodPrice() {
        const groupedCounts = _.groupBy(
          this.table,
          "Yemek kartınız varsa günlük güncel miktar nedir?"
        );
        const result = _.map(groupedCounts, (value, key) => [
          key,
          value.length,
        ]);
        console.table(result);
        this.genders = result;
        this.createChart(
          result,
          "Yemek kartınız varsa günlük güncel miktar nedir?",
          "bar",
          "x"
        );
      },
      createChart(dataGrouped, title, chartType, indexAxis) {
        if (chartType == null) {
          _chartType = "pie";
        } else {
          _chartType = chartType;
        }
        if (indexAxis == null) {
          _indexAxis = "x";
        } else {
          _indexAxis = indexAxis;
        }

        // Function to generate a random number between 0 and 1000
        function getRandomNumber() {
          return Math.floor(Math.random() * 1001); // Generates random number between 0 and 1000 (inclusive)
        }

        // Example usage
        var canvasId;
        do {
          var randomNumber = getRandomNumber();
          canvasId = "myChart" + randomNumber;
        } while (document.getElementById(canvasId)); // Check if element with ID exists

        // Function to generate a random number between 0 and 1000
        function getRandomNumber() {
          return Math.floor(Math.random() * 1001); // Generates random number between 0 and 1000 (inclusive)
        }

        // Example usage
        var canvasId;
        do {
          var randomNumber = getRandomNumber();
          canvasId = "myChart" + randomNumber;
        } while (document.getElementById(canvasId)); // Check if element with ID exists

        // Now, canvasId contains the unique ID for the canvas
        var chartDiv = document.createElement("div");
        chartDiv.className = "col-12";

        // Create and append the title
        var titleElement = document.createElement("h2");
        titleElement.textContent = title; // You can set the title here
        chartDiv.appendChild(titleElement);

        var canvas = document.createElement("canvas");
        canvas.id = canvasId;
        chartDiv.appendChild(canvas);

        document.getElementById("charts").appendChild(chartDiv);

        // Now you can create the chart using the canvas ID (canvasId)
        // You would need to define data, title, and chartType accordingly
        // createChart(data, title, chartType);

        // Now you can create the chart using the canvas ID (canvasId)
        // You would need to define data, title, and chartType accordingly
        // createChart(data, title, chartType);

        var ctx = document.getElementById(canvasId).getContext("2d");
        console.log("datagroup", dataGrouped);
        console.log("data ungroup", this.genders);
        /*
        for vue data this.genders
        var labels = this.genders.map(entry => entry[0]);
        var data = this.genders.map(entry => entry[1]);
        */
        var labels = dataGrouped.map((entry) => entry[0]);
        var data = dataGrouped.map((entry) => entry[1]);
        var backgroundColors = dataGrouped.map(() => this.getRandomColor());

        var myChart = new Chart(ctx, {
          type: _chartType,
          data: {
            labels: labels,
            datasets: [
              {
                label: title,
                data: data,
                fill: false,
                backgroundColor: backgroundColors,
              },
            ],
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          options: {
            responsive: true,
            indexAxis: _indexAxis,
            maintainAspectRatio: true,

            title: {
              display: true,
              text: title,
            },
          },
        });
      },
      getRandomColor() {
        // Define a range of blue tones
        var minBlue = 100; // Minimum blue value
        var maxBlue = 255; // Maximum blue value
        var blue =
          Math.floor(Math.random() * (maxBlue - minBlue + 1)) + minBlue;

        // Generate random values for red and green to create different shades of blue
        var red = Math.floor(Math.random() * blue);
        var green = Math.floor(Math.random() * blue);

        // Convert the RGB values to hexadecimal format
        var redHex = red.toString(16).padStart(2, "0");
        var greenHex = green.toString(16).padStart(2, "0");
        var blueHex = blue.toString(16).padStart(2, "0");

        // Construct the hexadecimal color code
        var color = "#" + redHex + greenHex + blueHex;

        return color;
      },
    
      runDataGrid() {
        //create Tabulator on DOM element with id "example-table"
        var table = new Tabulator("#example-table", {
          height: 400, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
          pagination: true,
          layout: "fitDataStretch",

          // fit columns to width of table (optional)

          data: this.table, // assign data to table
          rowHeight: 30,
          columns: [
            // Define Table Columns
            {
              headerFilter: true,
              headerFilterPlaceholder: "Search",
              title: "Submission Date",
              field: "Submission Date",
              hozAlign: "center",
              sorter: "date",
              sorterParams: { format: "MMM D, YYYY" },
            },
            {
              headerFilter: true,
              headerFilterPlaceholder: "Search",
              title: "Cinsiyet",
              field: "Cinsiyet",
              hozAlign: "center",
            },
            {
              headerFilter: true,
              headerFilterPlaceholder: "Search",
              title: "Yan haklarınız",
              field: "Yan haklarınız",
              hozAlign: "left",
              formatter: "textarea",
              width: 150,
            },
            {
              headerFilter: true,
              headerFilterPlaceholder: "Search",
              title: "Şirketiniz hangi lokasyon merkezli?",
              field: "Şirketiniz hangi lokasyon merkezli?",
              hozAlign: "center",
            },
            {
              headerFilter: true,
              headerFilterPlaceholder: "Search",
              title: "Şirketiniz hangi ülke merkezli?",
              field: "Şirketiniz hangi ülke merkezli?",
              hozAlign: "center",
            },
            {
              headerFilter: true,
              headerFilterPlaceholder: "Search",
              title: "Şirketiniz hangi şehirde?",
              field: "Şirketiniz hangi şehirde? (Eğer Türkiye ise)",
              hozAlign: "center",
            },
            {
              headerFilter: true,
              headerFilterPlaceholder: "Search",
              title: "Çalışma şekliniz nedir?",
              field: "Çalışma şekliniz nedir?",
              hozAlign: "center",
            },
            {
              headerFilter: true,
              headerFilterPlaceholder: "Search",
              title: "Şirketinizin çalışan sayısı nedir?",
              field: "Şirketinizin çalışan sayısı nedir?",
              hozAlign: "center",
            },
            {
              headerFilter: true,
              headerFilterPlaceholder: "Search",
              title: "Hangi pozisyonda çalışıyorsunuz?",
              field: "Hangi pozisyonda çalışıyorsunuz?",
              hozAlign: "center",
            },
            {
              headerFilter: true,
              headerFilterPlaceholder: "Search",
              title: "Çalıştığınız şirketteki unvanınız nedir?",
              field: "Çalıştığınız şirketteki unvanınız nedir?",
              hozAlign: "center",
            },
            {
              headerFilter: true,
              headerFilterPlaceholder: "Search",
              title: "Deneyim",
              field: "Deneyim",
              hozAlign: "center",
            },
            {
              headerFilter: true,
              headerFilterPlaceholder: "Search",
              title:
                "Ağırlıklı olarak hangi teknolojileri / dilleri kullanıyorsunuz?",
              field:
                "Ağırlıklı olarak hangi teknolojileri / dilleri kullanıyorsunuz?",
              hozAlign: "center",
            },
            {
              headerFilter: true,
              headerFilterPlaceholder: "Search",
              title: "Kazancınız hangi para biriminde?",
              field: "Kazancınız hangi para biriminde?",
              hozAlign: "center",
            },
            {
              headerFilter: true,
              headerFilterPlaceholder: "Search",
              title: "Maaş tipi",
              field: "Maaş tipi",
              hozAlign: "center",
            },
            {
              headerFilter: true,
              headerFilterPlaceholder: "Search",
              title: "Senede kaç kez zam alıyorsunuz?",
              field: "Senede kaç kez zam alıyorsunuz?",
              hozAlign: "center",
            },
            {
              headerFilter: true,
              headerFilterPlaceholder: "Search",
              title: "Ara zam / iyileştirme oranınız hangi aralıkta?",
              field: "Ara zam / iyileştirme oranınız hangi aralıkta?",
              hozAlign: "center",
            },
            {
              headerFilter: true,
              headerFilterPlaceholder: "Search",
              title: "Yemek kartınız varsa günlük güncel miktar nedir?",
              field: "Yemek kartınız varsa günlük güncel miktar nedir?",
              hozAlign: "center",
            },
            {
              headerFilter: true,
              headerFilterPlaceholder: "Search",
              title:
                'Maaş / Aylık Türk Lirası cinsinden (Ortalama "NET" ücret)',
              field:
                'Maaş / Aylık Türk Lirası cinsinden (Ortalama "NET" ücret)',
              hozAlign: "center",
            },
          ],
          headerFilter: true,
        });
      },
    },
    mounted() {
      this.getJson();
    },
    created() {},
  }).mount("#app");
});
