export interface SavePurchases {
    save: (purchases: Array<SavePurchases.Params>) => Promise<void>//deixar promisse pois serve tanto no online quanto off
}
namespace SavePurchases {
    export type Params = {
        id: string
        date: Date
        value: number
    }
}
