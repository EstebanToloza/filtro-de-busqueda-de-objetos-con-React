import { useState } from "react";

function App() {

  const productsList = [
    {
      "id": 1,
      "name": "cerulean",
      "model": 2000,
      "color": "#98B2D1",
      "stock": "15-4020"
    },
    {
      "id": 2,
      "name": "fuchsia rose",
      "model": 2001,
      "color": "#C74375",
      "stock": "17-2031"
    },
    {
      "id": 3,
      "name": "true red",
      "model": 2002,
      "color": "#BF1932",
      "stock": "19-1664"
    },
    {
      "id": 4,
      "name": "aqua sky",
      "model": 2003,
      "color": "#7BC4C4",
      "stock": "14-4811"
    },
    {
      "id": 5,
      "name": "tigerlily",
      "model": 2004,
      "color": "#E2583E",
      "stock": "17-1456"
    },
    {
      "id": 6,
      "name": "blue turquoise",
      "model": 2005,
      "color": "#53B0AE",
      "stock": "15-5217"
    },
    {
      "id": 7,
      "name": "sand dollar",
      "model": 2006,
      "color": "#DECDBE",
      "stock": "13-1106"
    },
    {
      "id": 8,
      "name": "chili pepper",
      "model": 2007,
      "color": "#9B1B30",
      "stock": "19-1557"
    },
    {
      "id": 9,
      "name": "blue iris",
      "model": 2008,
      "color": "#5A5B9F",
      "stock": "18-3943"
    },
    {
      "id": 10,
      "name": "mimosa",
      "model": 2009,
      "color": "#F0C05A",
      "stock": "14-0848"
    },
    {
      "id": 11,
      "name": "turquoise",
      "model": 2010,
      "color": "#45B5AA",
      "stock": "15-5519"
    },
    {
      "id": 12,
      "name": "honeysuckle",
      "model": 2011,
      "color": "#D94F70",
      "stock": "18-2120"
    },
    {
      "id": 13,
      "name": "cerulean",
      "model": 2000,
      "color": "#98B2D1",
      "stock": "15-4020"
    },
    {
      "id": 14,
      "name": "fuchsia rose",
      "model": 2001,
      "color": "#C74375",
      "stock": "17-2031"
    },
    {
      "id": 15,
      "name": "true red",
      "model": 2002,
      "color": "#BF1932",
      "stock": "19-1664"
    },
    {
      "id": 16,
      "name": "aqua sky",
      "model": 2003,
      "color": "#7BC4C4",
      "stock": "14-4811"
    },
    {
      "id": 17,
      "name": "tigerlily",
      "model": 2004,
      "color": "#E2583E",
      "stock": "17-1456"
    },
    {
      "id": 18,
      "name": "blue turquoise",
      "model": 2005,
      "color": "#53B0AE",
      "stock": "15-5217"
    },
    {
      "id": 19,
      "name": "sand dollar",
      "model": 2006,
      "color": "#DECDBE",
      "stock": "13-1106"
    },
    {
      "id": 20,
      "name": "chili pepper",
      "model": 2007,
      "color": "#9B1B30",
      "stock": "19-1557"
    },
    {
      "id": 21,
      "name": "blue iris",
      "model": 2008,
      "color": "#5A5B9F",
      "stock": "18-3943"
    },
    {
      "id": 22,
      "name": "mimosa",
      "model": 2009,
      "color": "#F0C05A",
      "stock": "14-0848"
    },
    {
      "id": 23,
      "name": "turquoise",
      "model": 2010,
      "color": "#45B5AA",
      "stock": "15-5519"
    },
    {
      "id": 24,
      "name": "honeysuckle",
      "model": 2011,
      "color": "#D94F70",
      "stock": "18-2120"
    }
  ];

  const [searchText, setSearchText] = useState();
  const [data, setData] = useState(productsList)

  const excludeProperties = ['id', 'model', 'color', 'stock']

  const handleChange = value => {
    setSearchText(value);
    filterData(value);
  }

  const filterData = value => {
    const lowerCaseValue = value.toLowerCase().trim();
    if(!lowerCaseValue) {
      setData(productsList);
    } 
    else {
      const filteredData = productsList.filter(item => {
        return Object.keys(item).some(key => {
          return excludeProperties.includes(key) ? false : item[key].toString().toLowerCase().includes(lowerCaseValue);
        })
      });
      setData(filteredData);
    }
  }

  return (
    <div className="App">
      Buscar: <input 
        type="text"
        placeholder="Buscar"
        value={searchText}
        onChange={e => handleChange(e.target.value)}
      />

      <div className="container">
        {data.map((item, i) => {
          return (
            <div className="box" key={i} style={{ backgroundColor: item.color }}>
              <b>Name: </b>{item.name}<br/>
              <b>Model: </b>{item.model}<br/>
              <b>Color: </b>{item.color}<br/>
              <b>Stock: </b>{item.stock}<br/>
            </div>)
        })}
        <div className="clearBoth"></div>
        {data.length === 0 && <span>Tarjeta inexistente!</span>}
      </div>
    </div>
  );
}

export default App;
