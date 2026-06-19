const removeExistingRestaurants = (existingRestaurants,newRestaurants) => {

    const existingIds = new Set(existingRestaurants.map((item) => item.info.id));


    const uniqueNewRestaurants = newRestaurants.filter(
        (newItem) => !existingIds.has(newItem.info.id)
    );

    return uniqueNewRestaurants;
}

export default removeExistingRestaurants;