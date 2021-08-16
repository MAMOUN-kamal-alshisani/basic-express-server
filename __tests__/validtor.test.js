const { server } =require('../src/server');
const supertest =require('supertest');
const request =supertest(server);
// const nameValidator =require('../src/middleware/validator');
// describe('nameValidator',()=>{

//     it('if not valid',async()=>{ 
        
//     let param='/person?name';
//     let status=500;
//     //act
//     const response = await request.get(param);
//     //assert
//     expect(response.status).toBe(status);
//     expect(typeof response.body).toEqual(status);});


//     // it('person',async()=>{

//     //     let param='/person?name=mamoun';
//     //     let status=200;
//     //     //act
//     //     const response = await request.get(param);
//     //     //assert
//     //     expect(response.status).toBe(status);
    
//     // });
//     it("valid string in the query", async () => {
//         const response = await request.get("/person?name=mamoun");
//         const data = (response.text);
//         expect(response.status).toEqual(200);
//         expect(data).toEqual({
//           name: "mamoun"
//     }) 
// }) 
// });

'use strict';
// const server = require("../src/server");
// const supertest = require("supertest");
// const request = supertest(server.app);
describe("validator",()=>{
// if no name in the query string
it("if query not valid", async () => {
    const response = await request.get("/person?name");
    expect(response.status).toEqual(500);
  });

  it("valid string in the query", async () => {
    const response = await request.get("/person?name=mamoun");
    const data = JSON.parse(response.text);
    expect(response.status).toEqual(200);
    expect(data).toEqual({
      name: "mamoun"
    });
  });
})