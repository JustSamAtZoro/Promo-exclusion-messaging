<template>
  <v-sheet
    class="promo-restriction-message d-flex align-center ga-2 pa-2 px-3"
    color="transparent"
    :style="{
      backgroundColor: '#eaeef0',
      border: '1px solid #b0bec6',
      borderRadius: '4px'
    }"
  >
    <div class="success-icon flex-shrink-0 d-flex align-center justify-center">
      <v-icon
        size="14"
        color="#4D7F23"
        class="custom-check-icon"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0ZM10.7812 5.78125L6.78125 9.78125C6.625 9.9375 6.40625 10.0156 6.1875 10.0156C5.96875 10.0156 5.75 9.9375 5.59375 9.78125L3.21875 7.40625C2.90625 7.09375 2.90625 6.59375 3.21875 6.28125C3.53125 5.96875 4.03125 5.96875 4.34375 6.28125L6.1875 8.125L9.65625 4.65625C9.96875 4.34375 10.4688 4.34375 10.7812 4.65625C11.0938 4.96875 11.0938 5.46875 10.7812 5.78125Z" fill="currentColor"/>
        </svg>
      </v-icon>
    </div>
    <div class="message-content d-flex align-center ga-1 text-body-2">
      <span class="font-weight-bold text-grey-darken-4">Zoro's best price:</span>
      <span class="font-weight-regular text-grey-darken-4">not eligible for any other offers or promotions</span>
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: 'PromoRestrictionMessage'
}
</script>

<style scoped>
/* Override Vuetify defaults to maintain exact design */
.promo-restriction-message {
  width: 100% !important;
  font-family: 'Roboto', sans-serif !important;
}

.success-icon {
  width: 14px !important;
  height: 14px !important;
}

.message-content {
  font-size: 14px !important;
  line-height: 1.375 !important;
  color: #222222 !important;
}

.custom-check-icon {
  width: 14px !important;
  height: 14px !important;
}

/* Mobile Responsiveness - Override Vuetify classes */
@media (max-width: 768px) {
  .promo-restriction-message {
    padding: 6px 10px !important;
  }
  
  .message-content {
    font-size: 13px !important;
    gap: 3px !important;
  }
  
  .success-icon {
    width: 12px !important;
    height: 12px !important;
  }
  
  .custom-check-icon {
    width: 12px !important;
    height: 12px !important;
  }
  
  .custom-check-icon svg {
    width: 12px !important;
    height: 12px !important;
  }
}

@media (max-width: 480px) {
  .promo-restriction-message {
    padding: 4px 8px !important;
    gap: 6px !important;
  }
  
  .message-content {
    font-size: 12px !important;
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 2px !important;
  }
}
</style>
