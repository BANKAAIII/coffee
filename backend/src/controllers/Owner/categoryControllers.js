//CRUD on Categories

import { categoryCheck, repetitionCheck, userDbCheck } from "../BasicControllers/userControllers"

//Create Category --Done
//Update Category
//Delete Category

//basic flow
// validate user as an Owner
// details extraction
// check for existance
// create new category / update / delete

//Create category
export const createCategory = async({ownerCreds},{categoryDetails}) => {

    //validate owner
    const ownerCheck = await userDbCheck({ownerCreds});
    if(!ownerCheck){ return res.status(400).json({
        message:"Unauthorized"
    }) }

    //details Extraction
    const details = {
        title:categoryDetails.title,
        description: categoryDetails.description
    }
    if( !categoryDetails.title || !categoryDetails.description ){ return res.status(400).json({
        message:"category details extraction failed"
    }) }

    // existance check
    const check = await categoryCheck(details);
    if(check){ return res.status(400).json({
        message:"category already exists"
    }) }

    // create category
    const creation = await createCategory({categoryDetails});
    if(creation == false) {
        return res.status(400).json({
            message:"category creation failed"
        })
    }
     if(creation == true) {
        return res.status(200).json({
            message:"category creation successfull"
        })
    }
    
}


// update Category

//basic workflow
// 1.validate Owner
// 2.extract details of category
// 3.check if repetion?
// 4.update the category

export const updateCategory = async({ownerCreds},{categoryDetails}) =>{

    // validate Owner 
    const ownerCheck = await userDbCheck({ownerCreds});
    if(!ownerCheck){ return res.status(400).json({
        message:"Unauthorized"
    }) }


    //details Extraction
    const details = {
        title:categoryDetails.title,
        description: categoryDetails.description
    }
    if(!details){ return res.status(400).json({
        message:"category details extraction failed"
    }) }

    // check for repetition
    const fetchDetails =await repetitionCheck(categoryDetails);
    if(fetchDetails){ return res.status(400).json({
        message:"same data exists"
    }) }

    //update the category
    const updating = await updateCategory({categoryDetails});
    if(!update){
        return res.status(400).json({
            message:"update failed"
        })
    }

    return res.status(200).json({
        message:"update successfull"
    })
}


// delete Category

// basic workflow
// 1. validate owner
// 2. details extraction
// 3. find the category
// 4. delete category

export const deleteCategory = async({categoryDetails}) => {
 
    // validate Owner 
    const ownerCheck = await userDbCheck({ownerCreds});
    if(!ownerCheck){ return res.status(400).json({
        message:"Unauthorized"
    }) }

    //details Extraction
    const details = {
        title:categoryDetails.title,
        description: categoryDetails.description
    }
    if(!details){ return res.status(400).json({
        message:"category details extraction failed"
    }) }

    //fetch category
    const checking = categoryCheck({categoryDetails});
    if(!checking){
        return res.status(400).json({
            message:"nothing to delete"
        })
    }

    // delete category
    const deletion = deleteCategory({categoryDetails});
    if(deletion === false ){
        return res.status(400).json({
            message:"deletion controller failed"
        })
    }

    return res.status(200).json({
        message:"category deletion successfull"
    })
}