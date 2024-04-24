export const productsList: Product[] = [
  {
    id: 1,
    name: 'LAPTOP LENOVO LEGION 5 RYZEN 7',
    price: 3679,
  },
  {
    id: 2,
    name: 'Laptop Avanzada ASUS TUF FA507RF-HN018',
    price: 3093,
    description:
      'MARCA: ASUS, MODELO: FA507RF-HN018, PART NUMBER: 90NR0HA1-M003Y0, COLOR: MECHA GRAY (GRIS)',
  },
  {
    id: 3,
    name: 'Laptop Avanzada ASUS TUF FX507ZC4-HN002',
    price: 4363,
    description:
      'MARCA: ASUS, MODELO	FX507ZC4-HN002, PART NUMBER: 90NR0GW1-M001F0, COLOR: MECHA GRAY (GRIS)',
  },
  {
    id: 4,
    name: 'Laptop Oficina Lenovo V15 G3 IAP',
    price: 1213,
    description:
      'MARCA: LENOVO, MODELO: V15 G3 IAP, PART NUMBER: 82TT00EALM, COLOR: IRON GREY (GRIS)',
  },
  {
    id: 5,
    name: 'LAPTOP ASUS TUF GAMING A15',
    price: 3019,
  },
];

export interface Product {
  id: number | string;
  name: string;
  price: number;
  description?: string;
}
