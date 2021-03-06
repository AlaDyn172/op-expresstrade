var schema = {
    ICase: {
        GetCaseOdds: {
            fields: {
                cases: 0
            }
        },
        GetCaseSchema: {
            fields: {
                cases: 0
            }
        },
        GetMinimumOpenVolume: {},
        OpenWithKeys: {
            method: 'POST',
            fields: {
                case_id: 1,
                amount: 0
            }
        }
    },
    ICaseSite: {
        GetKeyCount: {
            fields: {
                steam_id: 0,
                trade_url: 0
            }
        },
        GetTradeStatus: {
            fields: {
                offer_id: 1
            }
        },
        SendKeyRequest: {
            method: 'POST',
            fields: {
                steam_id: 0,
                trade_url: 0,
                case_id: 1,
                amount: 0,
                referral_uid: 0,
                rebate_commission_rate: 0
            }
        },
        UpdateCommissionSettings: {
            method: 'POST',
            fields: {
                network_id: 1,
                network_user_id: 1,
                referral_commission_rate: 0
            }
        }
    },
    IEthereum: {
        GetContractAddress: {}
    },
    IItem: {
        GetAllItems: {
            fields: {
                app_id: 1,
                sku: 0,
                page: 0,
                per_page: 0,
                sort: 0,
                no_exclusions: 0
            }
        },
        GetItemDefinitions: {
            fields: {
                app_id: 1,
                def_id_filter: 0,
                index_by: 0,
                page: 0,
                per_page: 0
            }
        },
        GetItems: {
            fields: {
                sku_filter: 0,
                wear_tier_index: 0
            }
        },
        GetItemsById: {
            fields: {
                item_id: 1
            }
        },
        GetRarityStats: {
            fields: {
                app_id: 1,
                def_id: 0
            }
        },
        InstantSellRecentItems: {
            method: 'POST',
            fields: {
                item_id: 1,
                instant_sell_type: 0
            }
        },
        WithdrawToOpskins: {
            method: 'POST',
            fields: {
                item_id: 1
            }
        }
    },
    ITrade: {
        GetApps: {},
        GetOffer: {
            fields: {
                offer_id: 1
            }
        },
        GetOffers: {
            fields: {
                uid: 0,
                state: 0,
                type: 0,
                page: 0,
                per_page: 0,
                ids: 0,
                sort: 0
            },
            data: {
                per_page: 100
            }
        },
        GetTradeUrl: {},
        GetUserInventory: {
            fields: {
                uid: 1,
                app_id: 1,
                page: 0,
                per_page: 0,
                search: 0,
                sort: 0
            },
            data: {
                app_id: 1,
                per_page: 100
            }
        },
        GetUserInventoryFromSteamId: {
            fields: {
                steam_id: 1,
                app_id: 1,
                page: 0,
                per_page: 0,
                search: 0,
                sort: 0
            },
            data: {
                app_id: 1,
                per_page: 100
            }
        },
        AcceptOffer: {
            method: 'POST',
            fields: {
                twofactor_code: 1,
                offer_id: 1
            }
        },
        CancelOffer: {
            method: 'POST',
            fields: {
                offer_id: 1
            }
        },
        RegenerateTradeUrl: {
            method: 'POST'
        },
        SendOffer: {
            method: 'POST',
            fields: {
                twofactor_code: 1,
                uid: 0,
                token: 0,
                trade_url: 0,
                items: 0,
                items_to_send: 0,
                items_to_receive: 0,
                expiration_time: 0,
                message: 0
            }
        },
        SendOfferToSteamId: {
            method: 'POST',
            fields: {
                twofactor_code: 1,
                steam_id: 1,
                items: 0,
                items_to_send: 0,
                items_to_receive: 0,
                expiration_time: 0,
                message: 0
            }
        }
    },
    IUser: {
        CreateVCaseUser: {
            method: 'POST',
            fields: {
                site_url: 1,
                display_name: 1
            }
        },
        GetInventory: {
            fields: {
                app_id: 1,
                page: 0,
                per_page: 0,
                search: 0,
                sort: 0,
                filter_in_trade: 0
            },
            data: {
                app_id: 1,
                per_page: 100,
                sort: 1
            }
        },
        GetProfile: {
            fields: {
                with_extra: 0
            }
        },
        UpdateProfile: {
            method: 'POST',
            fields: {
                display_name: 1,
                inventory_is_private: 1,
                allow_twofactor_code_reuse: 1
            }
        },
        UserReports: {
            method: 'POST',
            fields: {
                message: 1,
                report_type: 1,
                offer_id: 1
            }
        }
    }
}

module.exports = schema