function getData(tableName, id) {
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: "admin/includes/CRUD/getDataFromDB.php",
      type: "POST",
      data: {
        id: id,
        tableName: tableName,
      },
      dataType: "json",
      success: function (data) {
        // function compareDates(a, b) {
        //     const dateA = new Date(a.date);
        //     const dateB = new Date(b.date);

        //     // Сравниваем даты
        //     if (dateA > dateB) {
        //         return -1;
        //     } else if (dateA < dateB) {
        //         return 1;
        //     } else {
        //         return 0;
        //     }
        // }

        let dataArray = Object.values(data);

        //resolve(dataArray.sort(compareDates));
        resolve(dataArray);
      },
      error: function (xhr, status, error) {
        console.error("Error:", xhr, status, error);
        reject(error);
      },
    });
  });
}

function stringToImageArray(imageString) {
  return imageString.split(",").map((image) => image.trim());
}

function getFileExtension(filename) {
  return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
}

getData("galery").then((response) => {
  let block = $(".gallery").empty();
  let modal = $(".modal-content").empty();
  let index = 1;

  response.forEach((element) => {
    for (let i = 0; i < stringToImageArray(element.img).length; i++) {
      block.append(`
            <div class="thumbnail" onclick="openModal(); currentSlide(${index})">
                <img src="admin/img/${
                  stringToImageArray(element.img)[i]
                }" alt="Фото 1">
            </div>
        `);
      modal.append(`
            <div class="mySlides">
                <img src="admin/img/${
                  stringToImageArray(element.img)[i]
                }" alt="Фото 1">
            </div>
        `);
        index++;
    }
  });
});
