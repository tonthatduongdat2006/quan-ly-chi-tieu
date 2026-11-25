-- PostgreSQL Database Schema & Seed Data for AI Smart Expense (Nhóm 6)
-- Đáp ứng Task 3a & 3b (PostgreSQL schema, migrations & seeders)

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    display_name VARCHAR(120) NOT NULL,
    opening_balance BIGINT NOT NULL DEFAULT 0 CHECK (opening_balance >= 0),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(80) NOT NULL,
    type VARCHAR(16) NOT NULL CHECK (type IN ('income', 'expense')),
    icon VARCHAR(32) DEFAULT 'wallet',
    color VARCHAR(16) DEFAULT '#0f766e',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
    type VARCHAR(16) NOT NULL CHECK (type IN ('income', 'expense')),
    amount BIGINT NOT NULL CHECK (amount > 0),
    note TEXT,
    tx_date DATE NOT NULL DEFAULT CURRENT_DATE,
    source VARCHAR(16) NOT NULL DEFAULT 'manual' CHECK (source IN ('manual', 'ai')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS budgets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    month_year VARCHAR(7) NOT NULL, -- YYYY-MM
    limit_amount BIGINT NOT NULL CHECK (limit_amount > 0),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (user_id, category_id, month_year)
);

CREATE TABLE IF NOT EXISTS ai_drafts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    input_type VARCHAR(16) NOT NULL CHECK (input_type IN ('text', 'receipt')),
    raw_input TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS ai_draft_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    draft_id UUID NOT NULL REFERENCES ai_drafts(id) ON DELETE CASCADE,
    category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
    type VARCHAR(16) NOT NULL CHECK (type IN ('income', 'expense')),
    amount BIGINT NOT NULL CHECK (amount > 0),
    note TEXT,
    tx_date DATE NOT NULL DEFAULT CURRENT_DATE,
    status VARCHAR(16) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'discarded'))
);

-- Seed dữ liệu danh mục mặc định
INSERT INTO categories (user_id, name, type, icon, color)
VALUES
    (NULL, 'Ăn uống', 'expense', 'utensils', '#ea580c'),
    (NULL, 'Di chuyển', 'expense', 'car', '#0284c7'),
    (NULL, 'Mua sắm', 'expense', 'shopping-bag', '#9333ea'),
    (NULL, 'Hóa đơn & Tiện ích', 'expense', 'receipt', '#dc2626'),
    (NULL, 'Giải trí', 'expense', 'film', '#db2777'),
    (NULL, 'Khác', 'expense', 'tag', '#64748b'),
    (NULL, 'Lương', 'income', 'briefcase', '#16a34a'),
    (NULL, 'Thưởng & Phụ cấp', 'income', 'gift', '#0d9488')
ON CONFLICT DO NOTHING;
