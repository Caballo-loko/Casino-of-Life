
# casino-of-life-dashboard

This project started with the [create-solana-dapp](https://github.com/solana-developers/create-solana-dapp) generator, but it has now evolved into something very different.
If you are from the Hackathon and reading this I chewd glass and I hope you are having a great day!

## Getting Started

You will need to build the Docker image separately first:

```shell
docker pull caballoloko/mk2_ai_casino:latest
```

If you have any problems, the Dockerfile is inside the `dockeremulator` folder. The main Python script for the two-player agent fight is located at `custom_scripts/run_fight_and_stream.py`. 

Once you have it running and exec into it, you will need to manually alter the `metadata.json` inside `stable-retro/retro/data/stable/MortalKombatII-Genesis`.

```json
{
  "default_state": "Level1.JaxVsBaraka",
  "default_player_state": [
    "Level1.JaxVsBaraka",
    "Level1.LiuKangVsJax.2P"
  ]
}
```

#### Replace the `default_state` with:

```json
"Level1.LiuKangVsJax.2P"
```

#### The container uses supervisorctl for nginx and you will aslo need to verify the virtual display is exported for :99

You may also run into a problem with conda not recognizing certain libraieres for ffmpeg, specifically for GLIBCXX_3.4.30
and swars drive.  Sorry... but as soon as you try and run the script manually in the container you can make the proper sym links.

### Prerequisites

- Node v18.18.0 or higher
- Rust v1.77.2 or higher
- Anchor CLI 0.30.0 or higher
- Solana CLI 1.18.9 or higher

### Installation

#### Clone the repo

```shell
git clone https://github.com/Caballo-loko/Casino-of-Life/dapp-branch
cd casino-of-life-dashboard
```

#### Install Dependencies

```shell
npm install
```

#### Start the web app

```shell
npm run dev
```

## Apps

### Anchor

This is a Solana program written in Rust using the Anchor framework. The two programs deployed on Devnet are `betting_program` and `nft_game_agent_program`.

#### Commands

You can use any normal Anchor commands. Either move to the `anchor` directory and run the `anchor` command, or prefix the command with `npm run`, e.g.:

```shell
npm run anchor
```

### Web

This is a React app that uses the Anchor-generated client to interact with the Solana program.

#### Commands

Start the web app:

```shell
npm run dev
```

Build the web app:

```shell
npm run build
```

If you have any questions hit me up [Caballo Loko](https://caballoloko@cimai.biz)
