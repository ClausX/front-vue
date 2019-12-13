<template>
  <FVInputGroup>
        <template v-slot:head>
            Animal Information
        </template>

        <span class="labeled-input">
            <label for="species"> 
                Species: 
            </label>
            <input 
                type="text" 
                id="species" 
                name="favoriteAnimalSpecies" 
                placeholder="t.ex. Hund, katt, kråka, orm" 
                v-model="animal.species">
        </span>
        <span class="labeled-input">
            <label for="name"> 
                Name: 
            </label>
            <input 
                type="text" 
                id="name" 
                name="favoriteAnimalName" 
                placeholder="t.ex. Göran, Anki, kråkaN" 
                v-model="animal.name">
        </span>
        <span class="labeled-input">
            <label for="height"> 
                Height (m): 
            </label>
            <input 
                type="number" 
                id="height" 
                name="favoriteAnimalHeight" 
                placeholder=000
                v-model="animal.height">
        </span>
        <span class="labeled-input">
            <label for="color"> 
                Color: 
            </label>
            <span>
                <input v-model="animal.color">
                <input 
                    type="color" 
                    id="color" 
                    name="favoriteAnimalColor" 
                    v-model="animal.color">
            </span>
        </span>
        <FVButton @click="handleModalOpenClick()">
            Open modal
        </FVButton>
        
        <FVModal v-if="showModal" @close="showModal = false">
            <template v-slot:header>
                Animal profile
            </template>
            <template v-slot:body>
                <div class="grid-container">
                    <FVProfilePicture class="profile-picture" :color="animal.color"></FVProfilePicture>
                    <div class="species-label">Species:</div>
                    <div class="species-value">{{animal.species}}</div>
                    <div class="name-label">Name:</div>
                    <div class="name-value">{{animal.name}}</div>
                    <div class="height-label">Height:</div>
                    <div class="height-value">{{animal.height}} meters</div>
                </div>
            </template>
        </FVModal>
    </FVInputGroup>
</template>

<script>
import FVProfilePicture from "./ProfilePicture.vue";

export default {
    name: 'modalExample',
    components : {
      FVProfilePicture
    },
    data() {
        return {
            showModal: false,
            animal: {
                species: "",
                name: "",
                heigt: 0,
                color: "#09cdda"
            }
        }
    },
    methods: {
        handleModalOpenClick() {
            this.showModal = true;
            this.$nextTick();
        }
    }
}
</script>

<style scoped>
    .grid-container {
        display: grid;
        grid-template-columns: repeat(4, 2fr) 1fr;
        grid-template-rows: repeat(5, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }
    .species-label { grid-area: 1 / 3 / 2 / 4; }
    .species-value { grid-area: 1 / 4 / 2 / 5; }
    .name-label { grid-area: 2 / 3 / 3 / 4; }
    .name-value { grid-area: 2 / 4 / 3 / 5; }
    .height-label { grid-area: 3 / 3 / 4 / 4; }
    .height-value { grid-area: 3 / 4 / 4 / 5; }
    .profile-picture { 
        grid-area: 2 / 1 / 4 / 3; 
        padding-left: 30px;    
    }
</style>