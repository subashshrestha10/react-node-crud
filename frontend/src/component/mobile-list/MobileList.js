import React from "react";
import Mobile from "../mobile-card/Mobile";

export default function MobileList() {
  const mobileList = [
    {
      id: 1,
      name: 'Samsung S20 FE 6.5" Full HD+ AMOLED Display 8 GB RAM/ 128 GB',
      price: 70000,
      inStock: false,
      image:
        "https://www.searchpng.com/wp-content/uploads/2019/02/HUAWEI-P20-715x856.png",
    },
    {
      id: 2,
      name: 'Samsung J2',
      price: 20000,
      inStock: false,
      image:
        "https://www.pngonly.com/wp-content/uploads/2017/05/Samsung-Mobile-Phone-S5-PNG-Image.png",
    },
    {
      id: 3,
      name: 'Samsung M30s FE 6.5" Full HD+ AMOLED Display 6 GB RAM/ 645 GB',
      price: 32000,
      inStock: false,
      image:
        "https://purepng.com/public/uploads/large/purepng.com-samsung-phonesmartphoneandroidgooglephoneapplication-211519339028ghq1u.png",
    },
    {
      id: 4,
      name: 'One Plus Nova',
      price: 56000,
      inStock: false,
      image:
        "https://oasis.opstatics.com/content/dam/oasis/default/product-specs/8t-green.png",
    },
    {
      id: 5,
      name: 'One Plus 8T FE 6.5" Full HD+ AMOLED Display 8 GB RAM/ 128 GB',
      price: 65000,
      inStock: false,
      image:
        "https://www.searchpng.com/wp-content/uploads/2018/12/oneplus-6-leak-amazon-de-4.png",
    },
    {
      id: 6,
      name: 'Redmi Note 8 Pro ',
      price: 42000,
      inStock: false,
      image:
        "https://download.appmifile.com/5_updatepdf_in/28/02/2019/b7c1a94f-78d8-47ca-a3aa-d6c417b62d6e.png",
    },
    {
      id: 7,
      name: 'Nokia 3310',
      price: 10000,
      inStock: false,
      image:
        "https://images.ctfassets.net/wcfotm6rrl7u/5bjwfDGgZGuYoy6EyWSmMy/2c4edaa78f1ab9aac0e0fe5e6a2c8af0/Nokia-3310-Hero.png?fm=png",
    },
  ];

  return (
    <div className="row w-100">
      {mobileList.map((mobile) => (
        <div className="col-md-4 col-sm-6 col-lg-3 mt-4" key={mobile.id}>
          <Mobile mobile={mobile} />
        </div>
      ))}
    </div>
  );
}
