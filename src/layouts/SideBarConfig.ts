interface SideBarItemsProps {
    label: string,
    path: string,
}


export const SideBarItems: Array<SideBarItemsProps> = [

    {
        label: "Ana Sayfa",
        path: "/home",
    },
    {
        label: "İşlem Geçmişi",
        path: "history",
    },
    {
        label: "Transaction İstekleri",
        path: "transaction-get",
    },
    {
        label: "Ürün Gönder",
        path: "urun-gonder",
    },
    {
        label: "Oylama Paneli",
        path: "oylama-paneli",
    },

]