<template>
  <div class="promo-restriction-message">
    <div class="success-icon">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0ZM10.7812 5.78125L6.78125 9.78125C6.625 9.9375 6.40625 10.0156 6.1875 10.0156C5.96875 10.0156 5.75 9.9375 5.59375 9.78125L3.21875 7.40625C2.90625 7.09375 2.90625 6.59375 3.21875 6.28125C3.53125 5.96875 4.03125 5.96875 4.34375 6.28125L6.1875 8.125L9.65625 4.65625C9.96875 4.34375 10.4688 4.34375 10.7812 4.65625C11.0938 4.96875 11.0938 5.46875 10.7812 5.78125Z" fill="#4D7F23"/>
      </svg>
    </div>
    <div class="message-content">
      <span class="bold-text">Zoro's best price:</span>
      <span class="regular-text">not eligible for any other offers or promotions</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PromoRestrictionMessage'
}
</script>

<style scoped>
.promo-restriction-message {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: #eaeef0;
  border: 1px solid #b0bec6;
  border-radius: 4px;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  box-sizing: border-box;
}

.success-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
}

.message-content {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  line-height: 1.375;
  color: #222222;
}

.bold-text {
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
}

.regular-text {
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .promo-restriction-message {
    padding: 6px 10px;
  }
  
  .message-content {
    font-size: 13px;
    gap: 3px;
  }
  
  .success-icon {
    width: 12px;
    height: 12px;
  }
  
  .success-icon svg {
    width: 12px;
    height: 12px;
  }
}

@media (max-width: 480px) {
  .promo-restriction-message {
    padding: 4px 8px;
    gap: 6px;
  }
  
  .message-content {
    font-size: 12px;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
  }
}
</style>
