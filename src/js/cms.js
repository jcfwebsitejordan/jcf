import React from "react";
import CMS from "netlify-cms-app";
 
import { Button } from 'react-bootstrap';

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/style.scss";

import HomePreview from "./cms-preview-templates/home";
import PostPreview from "./cms-preview-templates/post";
import ProductsPreview from "./cms-preview-templates/products";
import ValuesPreview from "./cms-preview-templates/values";
import ContactPreview from "./cms-preview-templates/contact";
 

CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewStyle("../css/style.scss", { raw: true });
CMS.registerPreviewStyle("../css/nav/modules/_nav.scss", { raw: true });
CMS.registerPreviewStyle("../css/bootstrap.scss", { raw: true });
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("post", PostPreview);
CMS.registerPreviewTemplate("products", ProductsPreview);
CMS.registerPreviewTemplate("values", ValuesPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.init();
