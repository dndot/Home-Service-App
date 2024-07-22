import { gql, request } from 'graphql-request'

const MASTER_URL=`https://ap-south-1.cdn.hygraph.com/content/${process.env.NEXT_PUBLIC_MASTER_URL_KEY}/master`


const getCategory=async()=>{
    const query=gql`
    query Category {
  categories {
    bgcolor {
      hex
    }
    id
    name
    icon {
      url
    }
  }
}
  `
  const result= await request(MASTER_URL,query)

  return result

}

const getAllBusinessList=async()=>{
  const query=gql`
  query MyQuery {
  businessLists {
    about
    address
    category {
      name
    }
    contactPerson
    email
    image {
      url
    }
    id
    name
  }
}`


const result= await request(MASTER_URL,query)

  return result

}

const getBusinessByCategory =async(category)=>{
  const query = gql`
  query MyQuery {
  businessLists(where: {category: {name: "`+category+`"}}) {
    about
    address
    category {
      name
    }
    contactPerson
    email
    id
    name
    image {
      url
    }
  }
}`

const result= await request(MASTER_URL,query)

  return result

}

export default{
    getCategory,
    getAllBusinessList,
    getBusinessByCategory
}