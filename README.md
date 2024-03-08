# Web3 File Storing and Sharing App with Solana and Next.js

This README provides an overview of a web3-based file storing and sharing application that leverages Solana for blockchain interactions and Next.js for the web application framework. The app uses web3.storage for decentralized file storage on the IPFS network, ensuring files are immutable and accessible via a unique URL.

## Features

- **Decentralized File Storage**: Utilizes IPFS through web3.storage for storing files, ensuring they are immutable and accessible globally.
- **Next.js Framework**: Built on Next.js for server-side rendering and static site generation, offering a performant and scalable web application.
- **Solana Blockchain**: Integrates Solana for handling blockchain transactions, such as file upload confirmations and user authentication.

## Getting Started

### Prerequisites

- Basic knowledge of JavaScript, React, and Next.js.
- Node.js and npm installed on your computer.
- A web3.storage account and API key.

### Installation

1. **Set up the Next.js project and Tailwind CSS**:
   ```
   npx create-next-app file-sharing-app
   cd file-sharing-app
   ```
   Follow the official Tailwind CSS installation guide to set up styling.

2. **Configure web3.storage**:
   - Create an account on [web3.storage](https://web3.storage/) and obtain an API key.
   - Create a `.env.local` file in the root of your project and add your web3.storage API key:
     ```
     NEXT_PUBLIC_WEB3_STORAGE_API_KEY=your_api_key_here
     ```

3. **Run the application**:
   ```
   npm run dev
   ```
   Open your browser and go to http://localhost:3000. You should now see the file upload form.

### Usage

- **Upload a File**: Select a file, click "Upload," and the file will be uploaded to IPFS using web3.storage. Once the upload is complete, the IPFS URL will be displayed.

### Solana Integration

For blockchain interactions, such as transferring SOL or interacting with custom Solana programs, refer to the Solana-Web3.js library documentation.

- **Install Solana-Web3.js**:
 ```
 npm install --save @solana/web3.js
 ```

- **Example Transaction**:
 ```javascript
 const {
    Keypair,
    Transaction,
    SystemProgram,
    LAMPORTS_PER_SOL,
 } = require("@solana/web3.js");

 let fromKeypair = Keypair.generate();
 let toKeypair = Keypair.generate();
 let transaction = new Transaction();

 transaction.add(
    SystemProgram.transfer({
      fromPubkey: fromKeypair.publicKey,
      toPubkey: toKeypair.publicKey,
      lamports: LAMPORTS_PER_SOL,
    }),
 );
 ```

## Deployment

Consider deploying your application on Vercel, which provides seamless integration with Next.js and supports environment variables for secure API key management.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.

## License

This project is licensed under the Apache License 2.0.
