let walletConnected = false;
let walletAddress = '';
let walletBalance = 0;

// Theme Toggle Logic
const themeToggle = document.getElementById('themeToggle');
const iconSun = document.getElementById('icon-sun');
const iconMoon = document.getElementById('icon-moon');
const htmlElement = document.documentElement;

// Function to update icon based on theme
function updateThemeIcon(theme) {
    if (theme === 'light') {
        iconSun.style.display = 'none';
        iconMoon.style.display = 'block';
    } else {
        iconSun.style.display = 'block';
        iconMoon.style.display = 'none';
    }
}

// Check for saved user preference or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
    htmlElement.setAttribute('data-theme', 'light');
    updateThemeIcon('light');
}

themeToggle.addEventListener('click', () => {
    if (htmlElement.getAttribute('data-theme') === 'light') {
        htmlElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
        updateThemeIcon('dark');
    } else {
        htmlElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        updateThemeIcon('light');
    }
});

// Modal Logic
function openModal(id) {
    document.getElementById(id).classList.add('active');
}

function closeModal(id) {
    document.getElementById(id).classList.remove('active');
}

// Event Listeners for Modals
document.getElementById('btnConnectWallet').addEventListener('click', () => openModal('walletModal'));
document.getElementById('btnSubmitBP').addEventListener('click', () => openModal('bpModal'));
document.getElementById('btnSubmitBPCta').addEventListener('click', () => openModal('bpModal'));
document.getElementById('btnDeposit').addEventListener('click', () => {
    if(!walletConnected) {
        alert("请先连接钱包");
        openModal('walletModal');
    } else {
        document.getElementById('walletBalance').innerText = walletBalance.toFixed(2) + ' USDC';
        openModal('depositModal');
    }
});

// Close modal when clicking outside
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if(e.target === overlay) {
            overlay.classList.remove('active');
        }
    });
});

// 1. Real Connect Web3 Wallet
async function connectWeb3Wallet() {
    if (typeof window.ethereum !== 'undefined') {
        const btn = document.getElementById('btnConnectWallet');
        btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> 连接中...`;
        
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            walletAddress = accounts[0];
            walletConnected = true;
            
            // Get balance in Wei
            const balanceWei = await window.ethereum.request({
                method: 'eth_getBalance',
                params: [walletAddress, 'latest']
            });
            // Convert Wei to ETH/Token (approximate)
            const balanceEth = parseInt(balanceWei, 16) / 1e18;
            walletBalance = balanceEth;
            
            const shortAddr = walletAddress.substring(0, 6) + '...' + walletAddress.substring(38);
            btn.innerHTML = `<i class="fas fa-wallet"></i> ${shortAddr}`;
            btn.style.borderColor = 'var(--color-cyan-bright)';
            btn.style.color = 'var(--text-main)';
            btn.style.background = 'var(--bg-process-card-active)';
            
            closeModal('walletModal');
        } catch (error) {
            console.error("Wallet connection failed:", error);
            btn.innerHTML = `<i class="fas fa-wallet"></i> 连接钱包`;
            alert('连接被拒绝或发生错误');
        }
    } else {
        alert('未检测到 Web3 钱包，请安装 MetaMask 等扩展！');
    }
}

// 2. Real Deposit Transaction
async function executeRealDeposit() {
    const amountInput = document.getElementById('depositAmount');
    const amount = parseFloat(amountInput.value);
    
    if(!amount || amount <= 0) {
        alert("请输入有效的金额");
        return;
    }
    
    if(amount > walletBalance) {
        alert("余额不足");
        return;
    }
    
    const btn = document.querySelector('#depositModal .btn-primary');
    const originalText = btn.innerHTML;
    btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> 唤起钱包...`;
    
    try {
        // Send a 0 ETH transaction with data to simulate contract interaction safely
        const txParams = {
            to: walletAddress, // send to self for safety in demo
            from: walletAddress,
            value: '0x0', // 0 ETH
            data: '0x' + Array.from(new TextEncoder().encode('GuanlanVC Deposit')).map(b => b.toString(16).padStart(2, '0')).join('')
        };
        
        const txHash = await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [txParams],
        });
        
        btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> 等待区块确认...`;
        
        setTimeout(() => {
            walletBalance -= amount;
            alert(`存入交易已提交上链！\n交易哈希: ${txHash}`);
            closeModal('depositModal');
            btn.innerHTML = originalText;
            amountInput.value = '';
        }, 3000);
        
    } catch (error) {
        console.error(error);
        btn.innerHTML = originalText;
        alert('交易已被取消或失败');
    }
}

// 3. Real Signature for BP Submission
async function submitRealBP() {
    const name = document.getElementById('bpName').value;
    if(!name) {
        alert("请输入项目名称");
        return;
    }
    
    if(!walletConnected) {
        alert("请先连接钱包以验证创始人身份");
        closeModal('bpModal');
        openModal('walletModal');
        return;
    }
    
    const btn = document.querySelector('#bpModal .btn-primary');
    const originalText = btn.innerHTML;
    btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> 唤起钱包签名...`;
    
    try {
        const message = `【观澜星辰 AI 创投网络】\n\n确认提交项目：${name}\n\n请签名此消息以证明您是该项目的提交者。此签名不会消耗任何 Gas 费用。`;
        const hexMessage = '0x' + Array.from(new TextEncoder().encode(message)).map(b => b.toString(16).padStart(2, '0')).join('');
        
        const signature = await window.ethereum.request({
            method: 'personal_sign',
            params: [hexMessage, walletAddress],
        });
        
        closeModal('bpModal');
        btn.innerHTML = originalText;
        startAIEvaluation(name);
        
    } catch (error) {
        console.error(error);
        btn.innerHTML = originalText;
        alert('签名被拒绝，项目提交终止');
    }
}

function startAIEvaluation(projectName) {
    // Scroll to agent panel
    document.getElementById('platform').scrollIntoView({ behavior: 'smooth' });
    
    const badge = document.getElementById('agentStatusBadge');
    badge.innerHTML = `<i class="fas fa-spinner fa-pulse"></i> 正在评估 [${projectName}]`;
    badge.style.color = '#f1c40f';
    badge.style.borderColor = '#f1c40f50';
    badge.style.background = '#f1c40f10';
    
    const steps = [
        document.getElementById('step1'),
        document.getElementById('step2'),
        document.getElementById('step3')
    ];
    
    // Reset steps
    steps.forEach(step => {
        const statusIcon = step.querySelector('.step-status');
        statusIcon.className = 'fas fa-circle step-status';
        statusIcon.style.color = 'rgba(255,255,255,0.1)';
        step.querySelector('.sub').innerText = '等待中...';
    });
    
    // Reset payout
    document.getElementById('simScore').innerText = '- / 100';
    document.getElementById('simAmount').innerText = '- USDC';
    document.getElementById('simStatus').innerText = '待触发 →';
    document.getElementById('simStatus').style.color = 'var(--text-muted)';
    
    // Sequence
    let delay = 0;
    
    // Step 1
    setTimeout(() => {
        activateStep(steps[0], "分析技术可行性与 TAM...");
    }, delay += 500);
    
    setTimeout(() => {
        completeStep(steps[0], "通过：TAM $15B+");
    }, delay += 2500);
    
    // Step 2
    setTimeout(() => {
        activateStep(steps[1], "生成 GTM 策略推演...");
    }, delay += 500);
    
    setTimeout(() => {
        completeStep(steps[1], "通过：高市场匹配度");
    }, delay += 3000);
    
    // Step 3
    setTimeout(() => {
        activateStep(steps[2], "多 Agent 交叉辩论风控...");
    }, delay += 500);
    
    setTimeout(() => {
        completeStep(steps[2], "通过：合规及团队无风险");
    }, delay += 3500);
    
    // Final Result
    setTimeout(() => {
        badge.innerHTML = `<i class="fas fa-check-circle"></i> 评估完成`;
        badge.style.color = '#2ecc71';
        badge.style.borderColor = '#2ecc7150';
        badge.style.background = '#2ecc7110';
        
        document.getElementById('payoutSim').style.background = 'var(--bg-process-card-active)';
        
        document.getElementById('simScore').innerText = '88 / 100 (A级)';
        document.getElementById('simScore').style.color = '#2ee6d8';
        
        document.getElementById('simAmount').innerText = '$250,000 USDC';
        document.getElementById('simAmount').style.color = '#2ee6d8';
        
        document.getElementById('simStatus').innerText = '已发放至创始团队钱包';
        document.getElementById('simStatus').style.color = '#2ecc71';
        
        // Confetti effect could go here if we added a library, but alert works for now
        setTimeout(() => {
            alert(`恭喜！项目 [${projectName}] 已通过 VentureMind v2.3 的多维度 AI 尽调。\n智能合约已自动将 $250,000 USDC 启动资金转入您的钱包。`);
        }, 500);
        
    }, delay += 1000);
}

function activateStep(stepEl, text) {
    stepEl.querySelector('.sub').innerText = text;
    stepEl.querySelector('.sub').style.color = '#f1c40f';
    const statusIcon = stepEl.querySelector('.step-status');
    statusIcon.className = 'fas fa-spinner fa-pulse step-status';
    statusIcon.style.color = '#f1c40f';
}

function completeStep(stepEl, text) {
    stepEl.querySelector('.sub').innerText = text;
    stepEl.querySelector('.sub').style.color = '#2ecc71';
    const statusIcon = stepEl.querySelector('.step-status');
    statusIcon.className = 'fas fa-check step-status';
    statusIcon.style.color = '#2ecc71';
}