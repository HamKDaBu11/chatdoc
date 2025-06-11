import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsButton extends Struct.ComponentSchema {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    btnImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ComponentsChip extends Struct.ComponentSchema {
  collectionName: 'components_components_chips';
  info: {
    displayName: 'Chip';
  };
  attributes: {
    arrow: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsDropdown extends Struct.ComponentSchema {
  collectionName: 'components_components_dropdowns';
  info: {
    displayName: 'Dropdown';
  };
  attributes: {
    dropdownItem: Schema.Attribute.Component<'components.dropdown-item', true>;
  };
}

export interface ComponentsDropdownItem extends Struct.ComponentSchema {
  collectionName: 'components_components_dropdown_items';
  info: {
    displayName: 'DropdownItem';
    icon: 'cursor';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ComponentsFaq extends Struct.ComponentSchema {
  collectionName: 'components_components_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'cursor';
  };
  attributes: {
    answer: Schema.Attribute.String;
    question: Schema.Attribute.String;
  };
}

export interface ComponentsFaqList extends Struct.ComponentSchema {
  collectionName: 'components_components_faq_lists';
  info: {
    displayName: 'FAQList';
  };
  attributes: {
    faq: Schema.Attribute.Component<'components.faq', true>;
    faqHeading: Schema.Attribute.Component<'components.heading', false>;
  };
}

export interface ComponentsFeature extends Struct.ComponentSchema {
  collectionName: 'components_components_features';
  info: {
    displayName: 'Feature';
    icon: 'cursor';
  };
  attributes: {
    featureImg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsFeatureList extends Struct.ComponentSchema {
  collectionName: 'components_components_feature_lists';
  info: {
    displayName: 'FeatureList';
    icon: 'bulletList';
  };
  attributes: {
    feature: Schema.Attribute.Component<'components.feature', true>;
  };
}

export interface ComponentsFeatureSection extends Struct.ComponentSchema {
  collectionName: 'components_components_feature_sections';
  info: {
    displayName: 'FeatureSection';
  };
  attributes: {
    featureHeading: Schema.Attribute.Component<'components.headers', false>;
    featureList: Schema.Attribute.Component<'components.feature-list', false>;
  };
}

export interface ComponentsFileTypes extends Struct.ComponentSchema {
  collectionName: 'components_components_file_types';
  info: {
    displayName: 'FileTypes';
  };
  attributes: {
    formatChip: Schema.Attribute.Component<'components.chip', true>;
    subHeading: Schema.Attribute.String;
  };
}

export interface ComponentsFooter extends Struct.ComponentSchema {
  collectionName: 'components_components_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    footerLink: Schema.Attribute.Component<'components.link', true>;
  };
}

export interface ComponentsHeaders extends Struct.ComponentSchema {
  collectionName: 'components_components_headers';
  info: {
    displayName: 'Headers';
  };
  attributes: {
    heading: Schema.Attribute.Component<'components.heading', false>;
    headingImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface ComponentsHeading extends Struct.ComponentSchema {
  collectionName: 'components_components_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    subHeading: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsHero extends Struct.ComponentSchema {
  collectionName: 'components_components_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    chatWithDocumentsHeading: Schema.Attribute.Component<
      'components.heading',
      false
    >;
    fileTypes: Schema.Attribute.Component<'components.file-types', false>;
    heroHeader: Schema.Attribute.Component<'components.headers', true>;
    heroImg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    revolvingText: Schema.Attribute.Component<
      'components.revolving-text',
      true
    >;
    title: Schema.Attribute.String;
    tryForFreeButton: Schema.Attribute.Component<'components.button', false>;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    arrow: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ComponentsLogo extends Struct.ComponentSchema {
  collectionName: 'components_components_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    logoImg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    logoTitle: Schema.Attribute.String;
  };
}

export interface ComponentsNavbar extends Struct.ComponentSchema {
  collectionName: 'components_components_navbars';
  info: {
    displayName: 'Navbar';
  };
  attributes: {
    button: Schema.Attribute.Component<'components.button', false>;
    dropdown: Schema.Attribute.Component<'components.dropdown', false>;
    getStartedButton: Schema.Attribute.Component<'components.button', false>;
    logo: Schema.Attribute.Component<'components.logo', false>;
  };
}

export interface ComponentsPerks extends Struct.ComponentSchema {
  collectionName: 'components_components_perks';
  info: {
    displayName: 'Perks';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ComponentsRevolvingText extends Struct.ComponentSchema {
  collectionName: 'components_components_revolving_texts';
  info: {
    displayName: 'RevolvingText';
    icon: 'cursor';
  };
  attributes: {
    chip: Schema.Attribute.Component<'components.chip', false>;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface ComponentsSample extends Struct.ComponentSchema {
  collectionName: 'components_components_samples';
  info: {
    displayName: 'Sample';
    icon: 'cursor';
  };
  attributes: {
    sampleImg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    sampleLink: Schema.Attribute.Component<'components.link', false>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsSampleSection extends Struct.ComponentSchema {
  collectionName: 'components_components_sample_sections';
  info: {
    displayName: 'SampleSection';
  };
  attributes: {
    sampleHeading: Schema.Attribute.Component<'components.headers', true>;
    sampleTypes: Schema.Attribute.Component<'components.sample', true>;
  };
}

export interface ComponentsSubscription extends Struct.ComponentSchema {
  collectionName: 'components_components_subscriptions';
  info: {
    displayName: 'Subscription';
  };
  attributes: {
    subscriptionHeading: Schema.Attribute.Component<
      'components.heading',
      false
    >;
    subscriptionList: Schema.Attribute.Component<
      'components.subscription-list',
      false
    >;
    toggleSection: Schema.Attribute.Component<
      'components.toggle-section',
      false
    >;
  };
}

export interface ComponentsSubscriptionList extends Struct.ComponentSchema {
  collectionName: 'components_components_subscription_lists';
  info: {
    displayName: 'SubscriptionList';
  };
  attributes: {
    subscriptionOffers: Schema.Attribute.Component<
      'components.subscription-offers',
      true
    >;
  };
}

export interface ComponentsSubscriptionOffers extends Struct.ComponentSchema {
  collectionName: 'components_components_subscription_offers';
  info: {
    displayName: 'SubscriptionOffers';
  };
  attributes: {
    perks: Schema.Attribute.Component<'components.perks', true>;
    subscriptionButton: Schema.Attribute.Component<'components.button', false>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsSubscriptonType extends Struct.ComponentSchema {
  collectionName: 'components_components_subscripton_types';
  info: {
    displayName: 'SubscriptionType';
  };
  attributes: {
    subscriptionButton: Schema.Attribute.Component<'components.button', false>;
    subscriptionHeader: Schema.Attribute.Component<'components.headers', false>;
  };
}

export interface ComponentsTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_components_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'cursor';
  };
  attributes: {
    testimonialImg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    url: Schema.Attribute.String;
  };
}

export interface ComponentsTestimonialList extends Struct.ComponentSchema {
  collectionName: 'components_components_testimonial_lists';
  info: {
    displayName: 'TestimonialList';
  };
  attributes: {
    testimonial: Schema.Attribute.Component<'components.testimonial', true>;
  };
}

export interface ComponentsTestimonialSection extends Struct.ComponentSchema {
  collectionName: 'components_components_testimonial_sections';
  info: {
    displayName: 'TestimonialSection';
  };
  attributes: {
    testimonialHeading: Schema.Attribute.Component<'components.headers', false>;
    testimonialList: Schema.Attribute.Component<
      'components.testimonial-list',
      false
    >;
  };
}

export interface ComponentsToggleSection extends Struct.ComponentSchema {
  collectionName: 'components_components_toggle_sections';
  info: {
    displayName: 'ToggleSection';
    icon: 'cursor';
  };
  attributes: {
    monthly: Schema.Attribute.String;
    toggle: Schema.Attribute.Boolean;
    yearly: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.button': ComponentsButton;
      'components.chip': ComponentsChip;
      'components.dropdown': ComponentsDropdown;
      'components.dropdown-item': ComponentsDropdownItem;
      'components.faq': ComponentsFaq;
      'components.faq-list': ComponentsFaqList;
      'components.feature': ComponentsFeature;
      'components.feature-list': ComponentsFeatureList;
      'components.feature-section': ComponentsFeatureSection;
      'components.file-types': ComponentsFileTypes;
      'components.footer': ComponentsFooter;
      'components.headers': ComponentsHeaders;
      'components.heading': ComponentsHeading;
      'components.hero': ComponentsHero;
      'components.link': ComponentsLink;
      'components.logo': ComponentsLogo;
      'components.navbar': ComponentsNavbar;
      'components.perks': ComponentsPerks;
      'components.revolving-text': ComponentsRevolvingText;
      'components.sample': ComponentsSample;
      'components.sample-section': ComponentsSampleSection;
      'components.subscription': ComponentsSubscription;
      'components.subscription-list': ComponentsSubscriptionList;
      'components.subscription-offers': ComponentsSubscriptionOffers;
      'components.subscripton-type': ComponentsSubscriptonType;
      'components.testimonial': ComponentsTestimonial;
      'components.testimonial-list': ComponentsTestimonialList;
      'components.testimonial-section': ComponentsTestimonialSection;
      'components.toggle-section': ComponentsToggleSection;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
