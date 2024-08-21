# User Management System

## Overview

Welcome to the User Management System! This system provides a simple and effective way to manage user accounts, with functionalities tailored for both regular users and administrators.

## Features

### 1. **User Authentication**
   - **Login**: Users can securely log in using their username and password. The system differentiates between regular users and administrators based on their `account_type`.
   - **Registration**: New users can easily create an account by clicking the "Register" link on the login page.

### 2. **Role-Based Access Control**
   - The system assigns roles based on `account_type`, determining the level of access each user has.
     - **Regular User**: Access to edit personal information.
     - **Admin**: Access to the admin dashboard, where they can manage other users.

### 3. **Admin Dashboard**
   - **User List**: Admins can view a list of all users, including their email addresses and other relevant information.
   - **Edit Users**: Admins can edit user details, such as username, email, contact number, and account type, by clicking the "Edit" button next to each user.

### 4. **User Profile Management**
   - **Edit Profile**: Users can edit their profile information, such as their username, email, and contact number. Admins have the additional capability to update a user's account type.

## How It Works

- **Login Process**: 
   - Users log in with their credentials.
   - Upon login, the system checks the user's `account_type`.
     - If `account_type` is **user**, they are redirected to their profile edit page.
     - If `account_type` is **admin**, they are redirected to the admin dashboard.

- **Admin Capabilities**:
   - Admins have full control over user management, including the ability to update user information and change account types.

## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/user-management-system.git
   cd user-management-system
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm start
   ```

4. **Access the Application**:
   - Visit `http://127.0.0.1:5500` in your browser.
   - Login with your credentials or register a new account.

## Contributing

We welcome contributions! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License.

---
