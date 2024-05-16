type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; adicional: number }[];
};

type Produtos = Product[];


export const gourmets: Produtos = [
  {
    id: 1,
    title: "X-burguer Gourmet",
    desc: "Pão, hambúrguer, barbecue, queijo prato, maionese, batata chips",
    img: "/temporary/gourmet.jpg",
    price: 14.0,
    options: [
      {
        title: "Hambúrguer gourmet",
        adicional: 6.0,
      },

      {
        title: "Hambúrguer tradicional",
        adicional: 5.0,
      },

      {
        title: "Bacon",
        adicional: 6.0,
      },

      {
        title: "Frango",
        adicional: 6.0,
      },

      {
        title: "Calabresa",
        adicional: 6.0,
      },

      {
        title: "Queijo Prato",
        adicional: 4.0,
      },

      {
        title: "Queijo Mussarela",
        adicional: 4.0,
      },

      {
        title: "Catupiry",
        adicional: 3.0,
      },

      {
        title: "Cheddar",
        adicional: 3.0,
      },

      {
        title: "Ovo",
        adicional: 3.0,
      },
    ],
  },

  {
    id: 2,
    title: "X-Salada Gourmet",
    desc: "Pão, hambúrguer, barbecue, queijo prato, maionese, batata chips, alface, tomate, cebola roxa e rúcula",
    img: "/temporary/gourmet.jpg",
    price: 16.0,
    options: [
      {
        title: "Hambúrguer gourmet",
        adicional: 6.0,
      },

      {
        title: "Hambúrguer tradicional",
        adicional: 5.0,
      },

      {
        title: "Bacon",
        adicional: 6.0,
      },

      {
        title: "Frango",
        adicional: 6.0,
      },

      {
        title: "Calabresa",
        adicional: 6.0,
      },

      {
        title: "Queijo Prato",
        adicional: 4.0,
      },

      {
        title: "Queijo Mussarela",
        adicional: 4.0,
      },

      {
        title: "Catupiry",
        adicional: 3.0,
      },

      {
        title: "Cheddar",
        adicional: 3.0,
      },

      {
        title: "Ovo",
        adicional: 3.0,
      },
    ],
  },

  {
    id: 3,
    title: "X-Burgão Gourmet",
    desc: "Pão, hambúrguer, barbecue, queijo prato, maionese, batata chips, 2 queijo prato,  2 hambúrguer",
    img: "/temporary/gourmet.jpg",
    price: 20.0,
    options: [
      {
        title: "Hambúrguer gourmet",
        adicional: 6.0,
      },

      {
        title: "Hambúrguer tradicional",
        adicional: 5.0,
      },

      {
        title: "Bacon",
        adicional: 6.0,
      },

      {
        title: "Frango",
        adicional: 6.0,
      },

      {
        title: "Calabresa",
        adicional: 6.0,
      },

      {
        title: "Queijo Prato",
        adicional: 4.0,
      },

      {
        title: "Queijo Mussarela",
        adicional: 4.0,
      },

      {
        title: "Catupiry",
        adicional: 3.0,
      },

      {
        title: "Cheddar",
        adicional: 3.0,
      },

      {
        title: "Ovo",
        adicional: 3.0,
      },
    ],
  },

  {
    id: 4,
    title: "X-Saladão Gourmet",
    desc: "Pão, hambúrguer, barbecue, queijo prato, maionese, batata chips",
    img: "/temporary/gourmet.jpg",
    price: 14.0,
    options: [
      {
        title: "Hambúrguer gourmet",
        adicional: 6.0,
      },

      {
        title: "Hambúrguer tradicional",
        adicional: 5.0,
      },

      {
        title: "Bacon",
        adicional: 6.0,
      },

      {
        title: "Frango",
        adicional: 6.0,
      },

      {
        title: "Calabresa",
        adicional: 6.0,
      },

      {
        title: "Queijo Prato",
        adicional: 4.0,
      },

      {
        title: "Queijo Mussarela",
        adicional: 4.0,
      },

      {
        title: "Catupiry",
        adicional: 3.0,
      },

      {
        title: "Cheddar",
        adicional: 3.0,
      },

      {
        title: "Ovo",
        adicional: 3.0,
      },
    ],
  },
  {
    id: 5,
    title: "X-Egg Gourmet",
    desc: "Pão, hambúrguer, barbecue, queijo prato, maionese, batata chips",
    img: "/temporary/gourmet.jpg",
    price: 14.0,
    options: [
      {
        title: "Hambúrguer gourmet",
        adicional: 6.0,
      },

      {
        title: "Hambúrguer tradicional",
        adicional: 5.0,
      },

      {
        title: "Bacon",
        adicional: 6.0,
      },

      {
        title: "Frango",
        adicional: 6.0,
      },

      {
        title: "Calabresa",
        adicional: 6.0,
      },

      {
        title: "Queijo Prato",
        adicional: 4.0,
      },

      {
        title: "Queijo Mussarela",
        adicional: 4.0,
      },

      {
        title: "Catupiry",
        adicional: 3.0,
      },

      {
        title: "Cheddar",
        adicional: 3.0,
      },

      {
        title: "Ovo",
        adicional: 3.0,
      },
    ],
  },

  {
    id: 6,
    title: "X-Bacon Gourmet",
    desc: "Pão, hambúrguer, barbecue, queijo prato, maionese, batata chips",
    img: "/temporary/gourmet.jpg",
    price: 14.0,
    options: [
      {
        title: "Hambúrguer gourmet",
        adicional: 6.0,
      },

      {
        title: "Hambúrguer tradicional",
        adicional: 5.0,
      },

      {
        title: "Bacon",
        adicional: 6.0,
      },

      {
        title: "Frango",
        adicional: 6.0,
      },

      {
        title: "Calabresa",
        adicional: 6.0,
      },

      {
        title: "Queijo Prato",
        adicional: 4.0,
      },

      {
        title: "Queijo Mussarela",
        adicional: 4.0,
      },

      {
        title: "Catupiry",
        adicional: 3.0,
      },

      {
        title: "Cheddar",
        adicional: 3.0,
      },

      {
        title: "Ovo",
        adicional: 3.0,
      },
    ],
  },
  {
    id: 7,
    title: "X-Frango Gourmet",
    desc: "Pão, hambúrguer, barbecue, queijo prato, maionese, batata chips",
    img: "/temporary/gourmet.jpg",
    price: 14.0,
    options: [
      {
        title: "Hambúrguer gourmet",
        adicional: 6.0,
      },

      {
        title: "Hambúrguer tradicional",
        adicional: 5.0,
      },

      {
        title: "Bacon",
        adicional: 6.0,
      },

      {
        title: "Frango",
        adicional: 6.0,
      },

      {
        title: "Calabresa",
        adicional: 6.0,
      },

      {
        title: "Queijo Prato",
        adicional: 4.0,
      },

      {
        title: "Queijo Mussarela",
        adicional: 4.0,
      },

      {
        title: "Catupiry",
        adicional: 3.0,
      },

      {
        title: "Cheddar",
        adicional: 3.0,
      },

      {
        title: "Ovo",
        adicional: 3.0,
      },
    ],
  },
  {
    id: 8,
    title: "X-Calabresa Gourmet",
    desc: "Pão, hambúrguer, barbecue, queijo prato, maionese, batata chips",
    img: "/temporary/gourmet.jpg",
    price: 14.0,
    options: [
      {
        title: "Hambúrguer gourmet",
        adicional: 6.0,
      },

      {
        title: "Hambúrguer tradicional",
        adicional: 5.0,
      },

      {
        title: "Bacon",
        adicional: 6.0,
      },

      {
        title: "Frango",
        adicional: 6.0,
      },

      {
        title: "Calabresa",
        adicional: 6.0,
      },

      {
        title: "Queijo Prato",
        adicional: 4.0,
      },

      {
        title: "Queijo Mussarela",
        adicional: 4.0,
      },

      {
        title: "Catupiry",
        adicional: 3.0,
      },

      {
        title: "Cheddar",
        adicional: 3.0,
      },

      {
        title: "Ovo",
        adicional: 3.0,
      },
    ],
  },
  {
    id: 9,
    title: "X-Frango e Bacon Gourmet",
    desc: "Pão, hambúrguer, barbecue, queijo prato, maionese, batata chips",
    img: "/temporary/gourmet.jpg",
    price: 14.0,
    options: [
      {
        title: "Hambúrguer gourmet",
        adicional: 6.0,
      },

      {
        title: "Hambúrguer tradicional",
        adicional: 5.0,
      },

      {
        title: "Bacon",
        adicional: 6.0,
      },

      {
        title: "Frango",
        adicional: 6.0,
      },

      {
        title: "Calabresa",
        adicional: 6.0,
      },

      {
        title: "Queijo Prato",
        adicional: 4.0,
      },

      {
        title: "Queijo Mussarela",
        adicional: 4.0,
      },

      {
        title: "Catupiry",
        adicional: 3.0,
      },

      {
        title: "Cheddar",
        adicional: 3.0,
      },

      {
        title: "Ovo",
        adicional: 3.0,
      },
    ],
  },

  {
    id: 10,
    title: "X-Frango Calabresa Gourmet",
    desc: "Pão, hambúrguer, barbecue, queijo prato, maionese, batata chips",
    img: "/temporary/gourmet.jpg",
    price: 14.0,
    options: [
      {
        title: "Hambúrguer gourmet",
        adicional: 6.0,
      },

      {
        title: "Hambúrguer tradicional",
        adicional: 5.0,
      },

      {
        title: "Bacon",
        adicional: 6.0,
      },

      {
        title: "Frango",
        adicional: 6.0,
      },

      {
        title: "Calabresa",
        adicional: 6.0,
      },

      {
        title: "Queijo Prato",
        adicional: 4.0,
      },

      {
        title: "Queijo Mussarela",
        adicional: 4.0,
      },

      {
        title: "Catupiry",
        adicional: 3.0,
      },

      {
        title: "Cheddar",
        adicional: 3.0,
      },

      {
        title: "Ovo",
        adicional: 3.0,
      },
    ],
  },
  {
    id: 11,
    title: "X-Bacon Calabresa Gourmet",
    desc: "Pão, hambúrguer, barbecue, queijo prato, maionese, batata chips",
    img: "/temporary/gourmet.jpg",
    price: 14.0,
    options: [
      {
        title: "Hambúrguer gourmet",
        adicional: 6.0,
      },

      {
        title: "Hambúrguer tradicional",
        adicional: 5.0,
      },

      {
        title: "Bacon",
        adicional: 6.0,
      },

      {
        title: "Frango",
        adicional: 6.0,
      },

      {
        title: "Calabresa",
        adicional: 6.0,
      },

      {
        title: "Queijo Prato",
        adicional: 4.0,
      },

      {
        title: "Queijo Mussarela",
        adicional: 4.0,
      },

      {
        title: "Catupiry",
        adicional: 3.0,
      },

      {
        title: "Cheddar",
        adicional: 3.0,
      },

      {
        title: "Ovo",
        adicional: 3.0,
      },
    ],
  },
  {
    id: 12,
    title: "X-Tudo Gourmet",
    desc: "Pão, hambúrguer, barbecue, queijo prato, maionese, batata chips",
    img: "/temporary/gourmet.jpg",
    price: 14.0,
    options: [
      {
        title: "Hambúrguer gourmet",
        adicional: 6.0,
      },

      {
        title: "Hambúrguer tradicional",
        adicional: 5.0,
      },

      {
        title: "Bacon",
        adicional: 6.0,
      },

      {
        title: "Frango",
        adicional: 6.0,
      },

      {
        title: "Calabresa",
        adicional: 6.0,
      },

      {
        title: "Queijo Prato",
        adicional: 4.0,
      },

      {
        title: "Queijo Mussarela",
        adicional: 4.0,
      },

      {
        title: "Catupiry",
        adicional: 3.0,
      },

      {
        title: "Cheddar",
        adicional: 3.0,
      },

      {
        title: "Ovo",
        adicional: 3.0,
      },
    ],
  },
];

export const singleProduct: Product = {
    id: 1,
    title: "X-burguer Gourmet",
    desc: "Pão, hambúrguer, barbecue, queijo prato, maionese, batata chips",
    img: "/temporary/gourmet.jpg",
    price: 14.0,
    options: [
      {
        title: "Nenhum",
        adicional: 0.0,
      },
    
      {
        title: "Bacon",
        adicional: 4.0,
      },


      {
        title: "Calabresa",
        adicional: 6.0,
      },

    ],    
};


type Menu = {
  id: number;
  tipo: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    tipo: "gourmets",
    title: "Hamburguer Gourmet",
    img: "/temporary/gourmet.jpg",
    color: "white",
  },
  {
    id: 2,
    tipo: "tradicional",
    title: "Hamburguer Tradicional",
    img: "/temporary/tradicional.jpg",
    color: "white",
  },
  {
    id: 3,
    tipo: "bebidas",
    title: "Bebidas e Combos",
    img: "/temporary/cocktails.jpg",
    color: "white",
  },
];
