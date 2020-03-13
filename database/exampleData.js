// result of calling s3.listObjects on one of the category folders

const exampleData = [
  {
    Key: 'fec-imagery/bottoms/.DS_Store',
    LastModified: 2020-03-12T22:44:09.000Z,
    ETag: '"194577a7e20bdcc7afbb718f502c134c"',
    Size: 6148,
    StorageClass: 'STANDARD'
  },
  {
    Key: 'fec-imagery/bottoms/14576c28-2482-42c2-8223-46101287362f.jpeg',
    LastModified: 2020-03-12T22:44:10.000Z,
    ETag: '"a5f9bdf4c13c57ae1e283e455ff93cb2"',
    Size: 42128,
    StorageClass: 'STANDARD'
  },
  {
    Key: 'fec-imagery/bottoms/1d440402-6229-467a-b3cb-5cae9d42d6df.jpeg',
    LastModified: 2020-03-12T22:44:10.000Z,
    ETag: '"af093bba3c2a1f7f634cf1b36103b6cf"',
    Size: 12199,
    StorageClass: 'STANDARD'
  },
  {
    Key: 'fec-imagery/bottoms/23465b86-d3dc-42bd-a7a5-2983a7215310.jpeg',
    LastModified: 2020-03-12T22:44:10.000Z,
    ETag: '"b9699ff7496665ad7e30b483813acaa4"',
    Size: 15018,
    StorageClass: 'STANDARD'
  },
  {
    Key: 'fec-imagery/bottoms/45b3e575-8a3e-408d-992f-99abb88be7d6.jpeg',
    LastModified: 2020-03-12T22:44:10.000Z,
    ETag: '"c195ab2c6dc81111a03a5382714d99c4"',
    Size: 18987,
    StorageClass: 'STANDARD'
  },
  {
    Key: 'fec-imagery/bottoms/4b6bb09d-0f59-4ad3-94f6-c16708cc216e.jpeg',
    LastModified: 2020-03-12T22:44:10.000Z,
    ETag: '"15098fa90da012202283d706b990af5b"',
    Size: 53385,
    StorageClass: 'STANDARD'
  },
  {
    Key: 'fec-imagery/bottoms/4d802f3d-2e96-46fe-b239-5ad9c0100584.jpeg',
    LastModified: 2020-03-12T22:44:09.000Z,
    ETag: '"a0d4f6191ea29ad40286774ff7b2774b"',
    Size: 42262,
    StorageClass: 'STANDARD'
  },
  {
    Key: 'fec-imagery/bottoms/5e873250-2b56-4256-9693-579faecb2397.jpeg',
    LastModified: 2020-03-12T22:44:10.000Z,
    ETag: '"47bb777e70d96186931c5f50af993ec2"',
    Size: 22822,
    StorageClass: 'STANDARD'
  },
  {
    Key: 'fec-imagery/bottoms/8aa637ef-326c-42f6-a68d-eebfc409f14a.jpeg',
    LastModified: 2020-03-12T22:44:10.000Z,
    ETag: '"923f40c8d7ec4d39557547924e40d46d"',
    Size: 47704,
    StorageClass: 'STANDARD'
  },
  {
    Key: 'fec-imagery/bottoms/8c2f34ab-178b-4f4e-a3d5-5a2da959d44f.jpeg',
    LastModified: 2020-03-12T22:44:09.000Z,
    ETag: '"dfcccaa1f8bb20e060ef12a9a5f0b6b4"',
    Size: 13637,
    StorageClass: 'STANDARD'
  },
  {
    Key: 'fec-imagery/bottoms/b2cf6972-a50c-4523-936d-35e035350784.jpeg',
    LastModified: 2020-03-12T22:44:09.000Z,
    ETag: '"d5854dba233a181a135c987b3403f2c5"',
    Size: 16876,
    StorageClass: 'STANDARD'
  },
  {
    Key: 'fec-imagery/bottoms/b326e167-efef-4a7f-930c-b2921d0dd337.jpeg',
    LastModified: 2020-03-12T22:44:10.000Z,
    ETag: '"9d8fadc9a0c499012ce181e5886f73db"',
    Size: 32651,
    StorageClass: 'STANDARD'
  },
  {
    Key: 'fec-imagery/bottoms/bf92c3a3-74b2-47bf-b31a-ba215e71462c.jpeg',
    LastModified: 2020-03-12T22:44:09.000Z,
    ETag: '"161f61ed93c19594e167e2de6d19fbf5"',
    Size: 13569,
    StorageClass: 'STANDARD'
  },
  {
    Key: 'fec-imagery/bottoms/da540d04-120e-453b-8b4b-3e48cb65e70f.jpeg',
    LastModified: 2020-03-12T22:44:10.000Z,
    ETag: '"c5ecf671fa761bcba355013fb287ca5b"',
    Size: 43354,
    StorageClass: 'STANDARD'
  },
  {
    Key: 'fec-imagery/bottoms/dab9e918-b7ce-4cac-8715-652e99abf59a.jpeg',
    LastModified: 2020-03-12T22:44:10.000Z,
    ETag: '"bad1679649bb4c4fa3dc1c7ff3f26930"',
    Size: 16914,
    StorageClass: 'STANDARD'
  },
  {
    Key: 'fec-imagery/bottoms/e9430ecb-59b6-47cc-b7a4-d7766dcafdbd.jpeg',
    LastModified: 2020-03-12T22:44:09.000Z,
    ETag: '"ecf6386312f20a1d561861a81d8c89ff"',
    Size: 24965,
    StorageClass: 'STANDARD'
  },
  {
    Key: 'fec-imagery/bottoms/ef3aa978-13f1-4b82-8bdd-108da609398c.jpeg',
    LastModified: 2020-03-12T22:44:10.000Z,
    ETag: '"63c7e8f3bf8dbae86d625a3ea47e8c03"',
    Size: 23816,
    StorageClass: 'STANDARD'
  },
  {
    Key: 'fec-imagery/bottoms/fb86aa9e-d1c3-458a-a201-fb73d21909ad.jpeg',
    LastModified: 2020-03-12T22:44:10.000Z,
    ETag: '"e7eef286ac99c279d51185e6ead63489"',
    Size: 14283,
    StorageClass: 'STANDARD'
  }
];
