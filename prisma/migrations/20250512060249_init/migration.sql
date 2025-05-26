-- File: prisma/migrations/20250512060249_init/migration.sql
-- Tạo các bảng không có khóa ngoại trước
CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    user_name VARCHAR(100),
    phone VARCHAR(20),
    role VARCHAR(20) DEFAULT 'customer',
    created_at TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS services (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    price DECIMAL(10, 2),
    created_at TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS faqs (
    id SERIAL PRIMARY KEY,
    question TEXT,
    answer TEXT,
    created_at TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP
);

-- Tạo bảng events (không thêm khóa ngoại ngay)
CREATE TABLE IF NOT EXISTS events (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    address_id INTEGER UNIQUE,
    title VARCHAR(255),
    type VARCHAR(50),
    date TIMESTAMP(6),
    status VARCHAR(20) DEFAULT 'pending',
    created_at TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP
);

-- Tạo bảng Address (không thêm khóa ngoại ngay)
CREATE TABLE IF NOT EXISTS "Address" (
    Address_id SERIAL PRIMARY KEY,
    user_id INTEGER,
    event_id INTEGER UNIQUE,
    street VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(100),
    country VARCHAR(100),
    postal_code VARCHAR(20),
    latitude FLOAT,
    longitude FLOAT,
    created_at TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP
);

-- Tạo các bảng còn lại
CREATE TABLE IF NOT EXISTS "eventServices" (
    event_id INTEGER,
    service_id INTEGER,
    PRIMARY KEY (event_id, service_id)
);

CREATE TABLE IF NOT EXISTS payments (
    id SERIAL PRIMARY KEY,
    event_id INTEGER,
    amount DECIMAL(10, 2),
    status VARCHAR(20) DEFAULT 'pending',
    payment_method VARCHAR(50),
    created_at TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS support_requests (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    event_id INTEGER,
    subject VARCHAR(255),
    description TEXT,
    status VARCHAR(20) DEFAULT 'pending',
    created_at TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    resolved_at TIMESTAMP(6)
);

CREATE TABLE IF NOT EXISTS notifications (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    title VARCHAR(255),
    message TEXT,
    type VARCHAR(50),
    is_read BOOLEAN DEFAULT false,
    email_sent BOOLEAN DEFAULT false,
    created_at TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS logs (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    action VARCHAR(100),
    details JSON,
    created_at TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP
);

-- Thêm khóa ngoại sau khi tất cả bảng được tạo
ALTER TABLE events
    ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE SET NULL ON UPDATE CASCADE,
    ADD CONSTRAINT fk_address FOREIGN KEY (address_id) REFERENCES "Address"(Address_id) ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "Address"
    ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE SET NULL ON UPDATE CASCADE,
    ADD CONSTRAINT fk_event FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "eventServices"
    ADD CONSTRAINT fk_event FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE ON UPDATE CASCADE,
    ADD CONSTRAINT fk_service FOREIGN KEY (service_id) REFERENCES services(id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE payments
    ADD CONSTRAINT fk_event FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE support_requests
    ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE SET NULL ON UPDATE CASCADE,
    ADD CONSTRAINT fk_event FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE notifications
    ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE logs
    ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE SET NULL ON UPDATE CASCADE;