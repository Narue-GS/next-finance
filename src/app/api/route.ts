import { NextApiRequest, NextApiResponse } from "next";

const hendler = (req: NextApiRequest, res:NextApiResponse) => {
  const body = req.body
  console.log(body);
  
  res.status(200).end()
}

export default hendler