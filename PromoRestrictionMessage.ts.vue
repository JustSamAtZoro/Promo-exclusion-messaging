<script setup lang="ts">
/**
 * PromoRestrictionMessage - TypeScript Vue 3 Component
 * 
 * A reusable component for displaying promo restriction messages
 * with exact Figma design specifications.
 * 
 * @example
 * <PromoRestrictionMessage />
 * 
 * @example Custom text
 * <PromoRestrictionMessage 
 *   bold-text="Custom offer"
 *   regular-text="terms and conditions apply"
 * />
 */

// Define component props with TypeScript types
interface Props {
  /** The bold text portion of the message */
  boldText?: string;
  /** The regular text portion of the message */
  regularText?: string;
}

// Define props with default values
withDefaults(defineProps<Props>(), {
  boldText: "Zoro's best price",
  regularText: "not eligible for any other offers or promotions"
});
</script>

<template>
  <div class="promo-restriction-message">
    <div class="success-icon">
      <i class="fa fa-check-circle"></i>
    </div>
    <div class="message-content">
      <span class="bold-text">{{ boldText }}:</span>
      <span class="regular-text">{{ regularText }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.promo-restriction-message {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  background-color: #eaeef0;
  border: 1px solid #b0bec6;
  border-radius: 4px;

  @media (max-width: 768px) {
    padding: 6px 10px;
  }

  @media (max-width: 480px) {
    padding: 4px 8px;
    gap: 6px;
  }
}

.success-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .fa-check-circle {
    color: #4D7F23;
    font-size: 14px;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
}

.message-content {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  line-height: 1.375;
  color: #222222;

  @media (max-width: 768px) {
    font-size: 13px;
    gap: 3px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
  }
}

.bold-text {
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
}

.regular-text {
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
}
</style>
