import { resolve as _resolve } from "path";

export const entry = "./src/index.ts";
export const module = {
    rules: [
        {
            test: /\.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/
        },
        {
            test: /\.(jpg|png|svg)$/,
            loader: "url-loader",
            options: {
                limit: 25000
            }
        },
        {
            test: /\.(jpg|png|svg)$/,
            loader: "file-loader",
            options: {
                name: "[path][name].[hash].[ext]"
            }
        },
        {
            test: /\.ttf$/,
            use: [
                {
                    loader: "ttf-loader",
                    options: {
                        name: "./fonts/[hash].[ext]"
                    }
                }
            ]
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: "asset/resource"
        }
    ]
};
export const resolve = {
    extensions: [".tsx", ".ts", ".js"]
};
export const output = {
    filename: "bundle.js",
    path: _resolve(__dirname, "dist")
};
