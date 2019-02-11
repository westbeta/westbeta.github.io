---
layout: page
title: WordPress Authorize.Net Payments Plugin Documentation
---

# WordPress Authorize.Net Payments Plugin Documentation

Thank you for purchasing WordPress Authorize.Net Payments! If you have
any questions that are beyond the scope of this help documentation, please
feel free to email us at [support@westbeta.com](mailto:support@westbeta.com).

---

#### Table of Contents

- [Getting Started](#getting-started)
- [Settings](#settings)
- [Testing](#testing)
- [Shortcode](#shortcode)
- [Transactions](#transactions)
- [Compatibility](#compatibility)
- [Terms & Policies](#terms)
- [Support](#support)

---

<div id="getting-started"></div>

## Getting Started

<br>

##### 1. Unzip the Plugin Package

Start off by unzipping the plugin package. The plugin package should be named
something like **wp-authnet-payments-X.X.zip**. The number at the end of the
filename may change depending on the release of newer versions.

Once unzipped, you should see the following contents inside the folder:

- **wp-authnet-payments** - The actual WordPress plugin you will install into your WordPress website.
- **documentation** - Documentation for how to install and setup the plugin

<br>

##### 2. Install & Activate the Plugin

Next, install the WordPress Authorize.net Payments plugin as you would with any other WordPress plugin.
For help on this, visit the [WordPress support website](https://codex.wordpress.org/Managing_Plugins).
Then, activate the plugin by clicking the "Activate" button as seen in the image below.

![Activated Plugin](/assets/img/products/wp-authnet/support/activate-plugin.png)

Once the plugin is activated, you should see two new links on the left hand dashboard navigation.

![Dashboard Links](/assets/img/products/wp-authnet/support/dashboard-links.png)

<br>

##### 3. Register & Setup the Plugin

Click on the dashboard link titled "Authorize.Net". This will display
the options and settings for the WordPress Authorize.Net Payments plugin.

![Settings Selected](/assets/img/products/wp-authnet/support/settings-selected.png)

Register and activate by entering your email address that you used
to purchase the WordPress Authorize.Net Payments plugin and enter 
the license key you recieved.

![Register Plugin](/assets/img/products/wp-authnet/support/activate-license.png)

Once the plugin is activated, configure the settings to your choosing. 
Make sure to set the *Authorize.Net Login ID*
and the *Authorize.Net Transaction Key* as they are required for the plugin to work.
Learn more about all the plugin [settings and options here](#settings).

![Settings View](/assets/img/products/wp-authnet/support/settings-view.png)


*Note: An SSL certificate is highly suggested to ensure your customer credit
card details are safe while submitting payment.*

<br>

##### 4. Install the Shortcode

Finally, install the shortcode `[wp_authnet_payments]` into any of your pages or posts
to have the Authorize.Net Payment or Donation form display.

![Installed Shortcode in WordPress Page](/assets/img/products/wp-authnet/support/installed-shortcode.png)

After the shortcode is installed, visit your page to see the payment form.

![Payment form displayed on WordPress Page](/assets/img/products/wp-authnet/support/payment-form.png)

---

<div id="settings"></div>

## Settings

Below are the settings and options available to configure the WordPress Authorize.Net Payments plugin.

**Authorize.Net Login ID**

*Your Authorize.Net Login ID will be used to access the Authorize.Net payment
provider service. If you don't know what your Login ID is [click here](https://support.authorize.net/s/article/How-do-I-obtain-my-API-Login-ID-and-Transaction-Key)
to learn how to obtain your Login ID.*

**Authorize.Net Transaction Key**

*Your Authorize.Net Transaction Key will be used to access the Authorize.Net payment
provider service. If you don't know what your Transaction Key is [click here](https://support.authorize.net/s/article/How-do-I-obtain-my-API-Login-ID-and-Transaction-Key)
to learn how to obtain your Transaction Key.*

**Mode (Live/Test Sandbox)**

*This option allows you to switch between live (production) mode and test (sandbox) mode. This
way you can easily test your payments, transactions and subscriptions without having to submit
real credit card payments. To learn more about Authorize.Net Test Mode [visit here](https://support.authorize.net/s/article/What-Is-Test-Mode-and-How-Do-I-Turn-It-off-and-On)*

**Type of Payment (Donation/Payment)**

*The type of payment you wish to use: Payment or Donation.
The payment form language will change depending on what type of payment is selected.*

**Enable Subscriptions/Recurring Payments**

*This option allows you to enable subscription and recurring payments. If enabled,
the payment form will display subscription options at the bottom of the form.*

**Thank You Message**

*The message the user will see after a successful transaction.*

**One-time Payment Description**

*The message that will be sent in the description field to Authorize.Net
when a user submits a single one-time transaction.*

**Subscription Payment Description**

*The message that will be sent in the description field to Authorize.Net
when a user submits a recurring subscription transaction.*

**Select Box Name**

*Set a custom select box name that a user can select when submitting a transaction.
This will be sent in the description field to Authorize.Net. (example: Fund)*

**Select Box Values**

*Set the select box values here. Seperate by semicolons ";"
(example: Children's Fund; Veteran's Fund)*

**Comments Description**

*The description for the payment form's comments section*

---

<div id="testing"></div>

## Testing

You can easily test payments, transactions and subscriptions without having to submit
real credit card payments by enabling Test Mode in the WordPress Authorize.Net Payments
Setting page. Learn more about [Test Mode here](https://support.authorize.net/s/article/What-Is-Test-Mode-and-How-Do-I-Turn-It-off-and-On)
and about [testing in Authorize.Net here](https://developer.authorize.net/hello_world/testing_guide/).


![Enabled Testing](/assets/img/products/wp-authnet/support/enable-testing.png)

---

<div id="shortcode"></div>

## Shortcode

Install the shortcode below into any page or post to have the Authorize.Net Payment or
Donation form display:

```
[wp_authnet_payments]
```

---

<div id="transactions"></div>

## Transactions

#### Payments, Donations and Subscriptions

The WordPress Authorize.Net Payments plugin captures any payments, subscriptions or
donations through an entity called *"Transactions"*. You can see any Transactions
by clicking on the dashboard link in the WordPress Admin titled "Transactions"

Here you can browse all the transactions that have taken place through the
WordPress Authorize.Net Payments plugin.

#### Transaction Listing

![Transactions Listing View](/assets/img/products/wp-authnet/support/transactions-list.png)

#### Transaction Details

If you select a record from the Transaction List view a detailed record will be
displayed showing all the transaction data captured by the WordPress
Authorize.Net Payments plugin.

![Transaction Detail View](/assets/img/products/wp-authnet/support/transaction-detail.png)

Below are the types of transaction details captured by the WordPress
Authorize.Net Payments plugin:

- **Account Number** - The last 4 digits of the credit card number used in the payment, donation or subscription.
- **Amount** - The amount of the transaction.
- **Charge Type** - The type of charge the transaction was. "Single" if the it was a one-time payment or donation. "Subscription" if it is a recurring payment.
- **First Name** - The customer's first name.
- **Last Name** - The customer's last name.
- **Address** - The customer's address.
- **City** - The customer's city.
- **State** - The customer's state.
- **Country** - The customer's country.
- **Zip** - The customer's zip code.
- **Phone** - The customer's phone number.
- **Company** - The customer's company name.
- **Description** - Any meta data, type of selection, or comments in the transaction.
- **Email** - The customer's email address.
- **Subscription Start Date** - The start date of the subscription if the transaction is a recurring payment.
- **Subscription Total Occurrences** - Automatically calculated based on the subscription start and end dates.
- **Subscription Interval** - How often the recurring payments occur.
- **Subscription Name** - Name of the subscription.
- **Subscription Unit** - Describes whether the recurring payment happens monthly, quarterly or yearly.
- **Transaction ID** - The Authorize.Net transaction ID associated with the transaction.

---

<div id="compatibility"></div>

## Compatibility

WordPress Authorize.Net Payments is compatible with WordPress Version 4.8.0 and above.

---

<div id="terms"></div>

## Terms & Policies

- [Terms & Conditions](https://westbeta.com/terms)
- [End User License Agreement](https://westbeta.com/eula)

---

<div id="support"></div>

## Support

For further support and documentation please visit the
[product support page](https://westbeta.com/support) for more information.

If you have questions not answered here or have any suggestions
feel free to email us at [support@westbeta.com](mailto:support@westbeta.com) or visit our
[contact page](https://westbeta.com/contact).



