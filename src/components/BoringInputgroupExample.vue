<template>
  <FVInputGroup>
        <template v-slot:head>
            Boring stuff
        </template>
        <span class="labeled-input">
            <label for="topic"> 
                Some topic: 
            </label>
            <input 
                type="text" 
                id="topic" 
                name="favoriteBroingTopic" 
                placeholder="E.g. wheater, politics, krconcrete">
        </span>
        <span class="labeled-input">
            <label for="name"> 
                Name: 
            </label>
            <input 
                type="text" 
                id="name" 
                name="favoriteName" 
                placeholder="E.g. Hampus">
        </span>
        <span class="labeled-input">
            <label for="number"> 
                Some number: 
            </label>
            <input 
                type="number" 
                id="number" 
                name="favoriteNumber"
                placeholder=000>
        </span>
    </FVInputGroup>
</template>

