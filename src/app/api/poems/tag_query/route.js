const { getSession } = require('../neo4j_driver/route.js');


export const GET = async () =>{
  try {   
    const session = await getSession();
    const{searchParams} = new URL(request.url);
    const query = searchParams.get('query')
    
    let write =  await session.writeTransaction(tx => tx.run(query));
    
    return new Response(JSON.stringify(write), {status: 200})
}catch (error){
  return new Response(error, {status: 500})
}
} 