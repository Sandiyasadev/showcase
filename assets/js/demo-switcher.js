(function() {
    // Inject Styles for Switcher
    const style = document.createElement('style');
    style.innerHTML = `
        #webdev-switcher {
            position: fixed;
            bottom: 24px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 9999;
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px;
            background: rgba(15, 23, 42, 0.8);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 50px;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            animation: slideUp 0.5s ease-out forwards;
        }

        @keyframes slideUp {
            from { transform: translate(-50%, 100px); opacity: 0; }
            to { transform: translate(-50%, 0); opacity: 1; }
        }

        #webdev-switcher:hover {
            background: rgba(15, 23, 42, 0.95);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
            border-color: rgba(59, 130, 246, 0.3);
        }

        .ws-btn {
            background: transparent;
            border: none;
            color: #94a3b8;
            padding: 8px 16px;
            border-radius: 24px;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            gap: 6px;
            text-decoration: none;
            white-space: nowrap;
        }

        .ws-btn:hover {
            color: white;
            background: rgba(255, 255, 255, 0.1);
        }

        .ws-btn.active {
            background: #3b82f6;
            color: white;
            box-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
        }

        .ws-divider {
            width: 1px;
            height: 20px;
            background: rgba(255, 255, 255, 0.15);
            margin: 0 4px;
        }

        .ws-label {
            color: #64748b;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-left: 8px;
            margin-right: 4px;
            font-weight: 700;
        }

        .ws-icon {
            font-family: 'Material Icons', sans-serif; /* Fallback if not loaded */
            font-size: 16px;
            line-height: 1;
        }

        .ws-cta {
            background: white !important;
            color: black !important;
            padding: 8px 20px !important;
        }
        
        .ws-cta:hover {
            background: #f1f5f9 !important;
            transform: translateY(-1px);
        }

        @media (max-width: 640px) {
            #webdev-switcher {
                width: 90%;
                justify-content: space-between;
                flex-wrap: wrap;
                border-radius: 16px;
                padding: 12px;
            }
            .ws-label { display: none; }
            .ws-btn { flex: 1; justify-content: center; }
        }
    `;
    document.head.appendChild(style);

    // Identify current page
    const path = window.location.pathname;
    const isModern = path.includes('modern.html');
    
    // Create Switcher Container
    const switcher = document.createElement('div');
    switcher.id = 'webdev-switcher';

    // HTML Structure
    switcher.innerHTML = `
        <span class="ws-label">Style:</span>
        <a href="modern.html" class="ws-btn ${isModern ? 'active' : ''}">
            Modern
        </a>
        <a href="classic.html" class="ws-btn ${!isModern ? 'active' : ''}">
            Industrial
        </a>
        <div class="ws-divider"></div>
        <a href="../index.html" class="ws-btn">
            <span class="ws-icon">arrow_back</span>
            Back
        </a>
        <a href="../../index.html#contact" class="ws-btn ws-cta">
            Order This
        </a>
    `;

    document.body.appendChild(switcher);
})();
