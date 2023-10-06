import User from 'App/Models/User'
import { DateTime, DurationLike } from 'luxon'

export const MockPlusAnnuallyCancelAtEndOfBillingPeriod = (user: User, offset: DurationLike = { months: -3, days: -25 }) => {
  const start = DateTime.now().plus(offset)

  return {
    "object": {
      "id": "sub_1NeiEmFPw3xO2XBhLnwrhToG",
      "object": "subscription",
      "application": null,
      "application_fee_percent": null,
      "automatic_tax": {
        "enabled": false
      },
      "billing_cycle_anchor": start.toSeconds(),
      "billing_thresholds": null,
      "cancel_at": start.plus({ year: 1 }).toSeconds(),
      "cancel_at_period_end": true,
      "canceled_at": start.plus({ months: 2, days: 5 }),
      "cancellation_details": {
        "comment": null,
        "feedback": null,
        "reason": "cancellation_requested"
      },
      "collection_method": "charge_automatically",
      "created": start.toSeconds(),
      "currency": "usd",
      "current_period_end": start.plus({ month: 1 }).toSeconds(),
      "current_period_start": start.toSeconds(),
      "customer": user.stripeCustomerId,
      "days_until_due": null,
      "default_payment_method": "pm_1NeeU9FPw3xO2XBhOG8o2StB",
      "default_source": null,
      "default_tax_rates": [
      ],
      "description": null,
      "discount": null,
      "ended_at": null,
      "items": {
        "object": "list",
        "data": [
          {
            "id": "si_OSo7Q1hPqnbRr5",
            "object": "subscription_item",
            "billing_thresholds": null,
            "created": 1692226099,
            "metadata": {
            },
            "plan": {
              "id": "price_1LbTUAFPw3xO2XBhVTPfzrri",
              "object": "plan",
              "active": true,
              "aggregate_usage": null,
              "amount": 5000,
              "amount_decimal": "5000",
              "billing_scheme": "per_unit",
              "created": 1661623918,
              "currency": "usd",
              "interval": "year",
              "interval_count": 1,
              "livemode": false,
              "metadata": {
              },
              "nickname": null,
              "product": "prod_MK7j6nBYZtcSKQ",
              "tiers_mode": null,
              "transform_usage": null,
              "trial_period_days": null,
              "usage_type": "licensed"
            },
            "price": {
              "id": "price_1LbTUAFPw3xO2XBhVTPfzrri",
              "object": "price",
              "active": true,
              "billing_scheme": "per_unit",
              "created": 1661623918,
              "currency": "usd",
              "custom_unit_amount": null,
              "livemode": false,
              "lookup_key": null,
              "metadata": {
              },
              "nickname": null,
              "product": "prod_MK7j6nBYZtcSKQ",
              "recurring": {
                "aggregate_usage": null,
                "interval": "year",
                "interval_count": 1,
                "trial_period_days": null,
                "usage_type": "licensed"
              },
              "tax_behavior": "exclusive",
              "tiers_mode": null,
              "transform_quantity": null,
              "type": "recurring",
              "unit_amount": 5000,
              "unit_amount_decimal": "5000"
            },
            "quantity": 1,
            "subscription": "sub_1NfsViFPw3xO2XBhotVJhqGH",
            "tax_rates": [
            ]
          }
        ],
        "has_more": false,
        "total_count": 1,
        "url": "/v1/subscription_items?subscription=sub_1NfsViFPw3xO2XBhotVJhqGH"
      },
      "latest_invoice": "in_1NeiEmFPw3xO2XBhInHsuTRp",
      "livemode": false,
      "metadata": {
      },
      "next_pending_invoice_item_invoice": null,
      "on_behalf_of": null,
      "pause_collection": null,
      "payment_settings": {
        "payment_method_options": null,
        "payment_method_types": null,
        "save_default_payment_method": "off"
      },
      "pending_invoice_item_interval": null,
      "pending_setup_intent": null,
      "pending_update": null,
      "plan": {
        "id": "price_1LbTUAFPw3xO2XBhVTPfzrri",
        "object": "plan",
        "active": true,
        "aggregate_usage": null,
        "amount": 5000,
        "amount_decimal": "5000",
        "billing_scheme": "per_unit",
        "created": 1661623918,
        "currency": "usd",
        "interval": "year",
        "interval_count": 1,
        "livemode": false,
        "metadata": {
        },
        "nickname": null,
        "product": "prod_MK7j6nBYZtcSKQ",
        "tiers_mode": null,
        "transform_usage": null,
        "trial_period_days": null,
        "usage_type": "licensed"
      },
      "quantity": 1,
      "schedule": null,
      "start_date": start.toSeconds(),
      "status": "active",
      "test_clock": "clock_1NeeQuFPw3xO2XBhIbPDB9Dc",
      "transfer_data": null,
      "trial_end": null,
      "trial_settings": {
        "end_behavior": {
          "missing_payment_method": "create_invoice"
        }
      },
      "trial_start": null
    },
    "previous_attributes": {
      "cancel_at": null,
      "cancel_at_period_end": false,
      "canceled_at": null,
      "cancellation_details": {
        "reason": null
      }
    }
  }
}